const Validator = require('validator');

const isEmpty = require('../isEmpty');

module.exports = ({city, name, email, password, password2}) => {
  const errors = {};

  city ? city : city = '';
  name ? name : name = '';
  email ? email : email = '';
  password ? password : password = '';
  password2 ? password2 : password2 = '';

  if (Validator.isEmpty(city)) {
    errors.city = 'City field is required';
  }

  return {
    errors,
    isValid: !isEmpty(errors)
  }
}