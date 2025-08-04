const { Schema, model } = require('mongoose');

const supplierSchema = new Schema({
  nif: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  contact: {
    email: { type: String },
    phone: { type: String },
    mobile: { type: String },
  },
  address: { type: String },
});

module.exports = model('Supplier', supplierSchema);
