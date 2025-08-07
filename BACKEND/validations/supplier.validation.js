const Joi = require('joi');
const { name, email, phone, nif, address } = require('./common.validation');

const supplierSchema = Joi.object({
  name: name.required(),
  email: email.optional(),
  phone: phone.optional(),
  mobile: phone.optional(),
  nif: nif.required(),
  address: address.optional(),
});

const validateSupplier = data => {
  const { error, value } = supplierSchema.validate(data, { abortEarly: false });
  if (error) {
    const errors = error.details.map(detail => detail.message);
    return { valid: false, errors };
  }
  return { valid: true, value };
};

module.exports = { validateSupplier };
