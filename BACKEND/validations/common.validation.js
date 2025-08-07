const Joi = require('joi');

const name = Joi.string().trim().min(1).messages({
  'string.empty': 'Name is required',
});

const email = Joi.string().email().messages({
  'string.email': 'Invalid email format',
});

const phone = Joi.string()
  .pattern(/^[\d\s+()-]{7,20}$/)
  .messages({
    'string.pattern.base': 'Invalid phone format',
  });

const nif = Joi.string().alphanum().min(8).max(15).messages({
  'string.alphanum': 'NIF must be alphanumeric',
  'string.min': 'NIF too short',
  'string.max': 'NIF too long',
});

const address = Joi.string().allow('').messages({
  'string.base': 'Address must be a string',
});

module.exports = {
  name,
  email,
  phone,
  nif,
  address,
};
