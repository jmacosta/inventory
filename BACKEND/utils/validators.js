const isValidName = name => {
  return typeof name === 'string' && name.trim() !== '';
};

const isValidMail = mail => {
  return /^[\w.-]+@[\w.-]+\.\w{2,4}$/.test(mail);
};

const isValidPhone = phone => {
  return /^[\d\s+()-]{7,20}$/.test(phone);
};
const isValidNif = nif => {
  return /^[A-Z0-9]{8,15}$/i.test(nif);
};
const isValidAddress = address => {
  return typeof address === 'string';
};

module.exports = {
  isValidName,
  isValidMail,
  isValidPhone,
  isValidAddress,
  isValidNif,
};
