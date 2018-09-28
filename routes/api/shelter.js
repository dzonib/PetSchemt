const express = require('express');

const router = express.Router();
const Shelter = require('../../models/shelter').Shelter;


router.post('/register', (req, res) => {
  const {city, name, email, password, passowrd2} = req.body;



})


module.exports = router;