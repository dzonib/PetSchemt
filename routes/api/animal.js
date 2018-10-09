const express = require('express');
const Animal = require('../../models/animal');
const Shelter = require('../../models/shelter');
const passport = require('passport');

const router = express.Router();

// add animal
router.post('/', passport.authenticate('jwt', {session: false}), async(req, res) => {
  const {
    animalType,
    animalAge,
    animalName,
    animalBreed,
    animalImage,
    reserved
  } = req.body;

  const animal = new Animal({
    animalType,
    animalAge,
    animalImage,
    animalName,
    animalBreed,
    reserved,
    shelter: req.user.id
  });

  try {
    const shelter = await Shelter.findById(req.user.id);

    await shelter
      .animals
      .unshift(animal);

    await shelter.save();

    await animal
      .populate('shelter')
      .save();

    res.json(animal);
  } catch (e) {
    console.log(`ERROR --> ${e}`);
  }
});

// get all animals
router.get('/', async(req, res) => {

  const animals = await Animal
    .find()
    .populate('shelter', ['name']);

  res.json(animals)
})

// get one animal by id
router.get('/:id', async (req, res) => {

  try {
    const animal = await Animal
      .findById(req.params.id)
      .populate('shelter', ['city', 'name', 'email']);

    res.json(animal)

  } catch (e) {
    console.log(`ERROR --> ${e}`);
  }
})

// remove animal
router.delete('/remove/:id', passport.authenticate('jwt', {session: false}), async(req, res) => {

  try {
    const shelter = await Shelter.findById(req.user.id);

    const newAnimals = await shelter
      .animals
      .filter(animal => animal.id !== req.params.id);

    shelter.animals = newAnimals;

    await shelter.save();

    await Animal.findByIdAndDelete(req.params.id);

    res.json({success: true});

  } catch (e) {
    console.log(`ERROR --> ${e}`)
  }
});


module.exports = router;