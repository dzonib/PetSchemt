const Validator = require('validator');

const isEmpty = require('../isEmpty');

module.exports = ({city, street, name, email, password, password2}) => {
  let errors = {}; 

  city ? city : city = '';
  street ? street : street = '';
  name ? name : name = '';
  email ? email : email = '';
  password ? password : password = '';
  password2 ? password2 : password2 = '';

  if (!Validator.isLength(city, {min: 2, max: 10})) {
    errors.city = 'City must not be empty';
  }

  if (Validator.isEmpty(city)) {
    errors.city = 'Please select city';
  }

  if (Validator.isEmpty(street)) {
    errors.street = 'Street field is required';
  }

  if (!Validator.isLength(name, {min: 2, max: 30})) {
    errors.name = 'Name field must be between 2 and 20 charachters'
  }

  if (!Validator.isEmail(email)) {
    errors.email = 'Please enter valid email'
  }

  if (Validator.isEmpty(email)) {
    errors.email = 'Email field is required';
  }

  if (!Validator.isLength(password, {min: 6, max: 30})) {
    errors.password = 'Password must be between 6 and 30 charachters long'
  }

  if (Validator.isEmpty(password)) {
    errors.password = 'Password field is required';
  }

  if (!Validator.equals(password, password2)) {
    errors.password = 'Passwords must match'
    errors.password2 = 'Passwords must match'
  }


  return {
    errors,
    isValid: isEmpty(errors)
  }
}