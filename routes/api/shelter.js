const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const passport = require('passport')

const router = express.Router()
const Shelter = require('../../models/shelter')
const secretOrKey = require('../../config/keys').secretOrKey


// Register
const validateRegisterInput = require('../../validation/shelter/register')

router.post('/register', async (req, res) => {
  const {city, imageUrl, street, name, email, password} = req.body

  const {isValid, errors} = validateRegisterInput(req.body)

  if(!isValid) {
    return res.status(400).json(errors)
  }

  try {
    const checkIfRegistered = await Shelter.findOne({email})

    if (checkIfRegistered) {
      errors.email = 'Shelter with that email already registered'
      return res.status(400).json(errors)
    }

    const newShelter = new Shelter({
      city,
      imageUrl,
      street,
      name,
      email,
      password
    })

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(newShelter.password, salt)

    newShelter.password = hash

    await newShelter.save()

    return res.json(newShelter)

  } catch(e) {
    console.log(`ERROR --> ${e}`)
    res.json({success: false})
  }
})


// Login
const validateLoginInput = require('../../validation/shelter/login')

router.post('/login', async (req, res) => {
  const {email, password} = req.body

  const {errors, isValid} = validateLoginInput(req.body)

  if (!isValid) {
    return res.status(400).json(errors)
  }

  const shelter = await Shelter.findOne({email})

  if (!shelter) {
    errors.email = "No shelter registered with that email"
    return res.status(400).json(errors)
  }

  const isMatch = await bcrypt.compare(password, shelter.password)

  if (!isMatch) {
    errors.password = 'Password incorrect'
    return res.status(400).json(errors)
  }

  const payload = {
    street: shelter.street,
    id: shelter.id,
    name: shelter.name,
    email: shelter.email,
    city: shelter.city,
    imageUrl: shelter.imageUrl
  }

  const token = await jwt.sign(payload, secretOrKey, {expiresIn: 3600})

  res.json({token: `Bearer ${token}`})
})

// test protected route
router.get('/test', passport.authenticate('jwt', {session: false}), (req, res) => {

  const {city, name, email, street} = req.user

  res.json({city, name, email, street})
})

module.exports = router