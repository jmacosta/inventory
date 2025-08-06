const Supplier = require('../models/supplier');
const { isValidSupplier } = require('../validations/supplier.validation');

// Obtener todos los proveedores
const getAllSuppliers = async (req, res) => {
  try {
    const suppliers = await Supplier.find();
    res.json(suppliers);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener proveedores', error });
  }
};

// Obtener un proveedor por ID
const getSupplierById = async (req, res) => {
  try {
    const supplier = await Supplier.findById(req.params.id);
    if (!supplier) {
      return res.status(404).json({ message: 'Proveedor no encontrado' });
    }
    res.json(supplier);
  } catch (error) {
    res.status(500).json({ message: 'Error al buscar proveedor', error });
  }
};

// Crear un nuevo proveedor
const createSupplier = async (req, res) => {
  const errors = isValidSupplier(req.body);
  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }
  try {
    const newSupplier = new Supplier(req.body);
    const saved = await newSupplier.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: 'Error creating supplier', error });
  }
};

// Actualizar proveedor existente
const updateSupplier = async (req, res) => {
  try {
    const updated = await Supplier.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updated) {
      return res.status(404).json({ message: 'Proveedor no encontrado' });
    }
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: 'Error al actualizar proveedor', error });
  }
};

// Eliminar proveedor
const deleteSupplier = async (req, res) => {
  try {
    const deleted = await Supplier.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Proveedor no encontrado' });
    }
    res.json({ message: 'Proveedor eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar proveedor', error });
  }
};

module.exports = {
  getAllSuppliers,
  getSupplierById,
  createSupplier,
  updateSupplier,
  deleteSupplier,
};
