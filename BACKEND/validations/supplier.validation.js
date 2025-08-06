const validators = require('../utils/validators');
const isValidSupplier = data => {
  const errors = [];
  if (!validators.isValidName(data.name)) {
    errors.push('Name is not valid');
  }
  if (data.email && !validators.isValidMail(data.email)) {
    errors.push('Mail is not valid');
  }
  if (data.phone && !validators.isValidPhone(data.phone)) {
    errors.push('Phone is not valid');
  }
  if (data.mobile && !validators.isValidPhone(data.mobile)) {
    errors.push('Mobile is not valid');
  }
  if (data.address && !validators.isValidAddress(data.address)) {
    errors.push('Address is not valid');
  }
  return errors;
};
module.exports = { isValidSupplier };
