const { Schema, model, Types } = require('mongoose');

const productSchema = new Schema({
  name: String,
  price: Number,
  stock: Number,
  stockMin: Number,
  supplier: {
    type: Types.ObjectId,
    ref: 'Supplier',
    required: true,
  },
});

module.exports = model('Product', productSchema);
