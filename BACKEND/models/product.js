const { Schema, model, Types } = require('mongoose');

const productSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number },
  stock: { type: Number, min: 0 },
  stockMin: { type: Number, min: 0 },
  supplier: {
    type: Types.ObjectId,
    ref: 'Supplier',
    required: true,
  },
});

module.exports = model('Product', productSchema);
