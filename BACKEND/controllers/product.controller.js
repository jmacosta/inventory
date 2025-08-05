const { default: mongoose } = require('mongoose');
const Product = require('../models/product');

// Obtener todos los productos
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener productos', error });
  }
};

// Obtener un producto por ID
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate('supplier');
    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error al buscar producto', error });
  }
};

// Crear un nuevo producto
const createProduct = async (req, res) => {
  try {
    const { name, stock, stockMin, supplier } = new Product(req.body);
    if (!mongoose.Types.ObjectId.isValid(supplier)) {
      return res.status(400).json({ error: 'Supplier ID is not valid' });
    }

    const newProduct = new Product({
      name,
      stock,
      stockMin,
      supplier,
    });

    const saved = await newProduct.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: 'Error creating product', error });
  }
};

// Actualizar producto existente
const updateProduct = async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updated) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: 'Error al actualizar producto', error });
  }
};

// Eliminar producto
const deleteProduct = async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.json({ message: 'Producto eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar producto', error });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
