const isEmpty = require('../isEmpty');
const Validator = require('validator');

module.exports = ({email, password}) => {
  let errors = {};

  email ? email : email = '';
  password ? password : password = '';
  
  if(!Validator.isEmail(email)) {
    errors.email = 'Please enter valid email';
  }

  if (Validator.isEmpty(email)) {
    errors.email = 'Email required'
  }


  return {
    isValid: isEmpty(errors),
    errors
  }
}