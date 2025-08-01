const { Schema, model } = require('mongoose');

const supplierSchema = new Schema({
  nif: { String, required: true, unique: true },
  name: { type: String, required: true },
  contac: {
    email: String,
    phone: String,
    mobile: String,
  },
  address: String,
});

module.exports = model('Supplier', supplierSchema);
