`use strict`;

// Imports
const express = require('express');
const { clothes } = require('../models/index.js');
const router = express.Router();

// Routes
router.get('/clothes', async (req, res, next) => {
  try {
    const clothesData = await clothes.findAll();
    res.status(200).send(clothesData);
  } catch (e) {
    next(e.message);
  }
});

router.post('/clothes', async (req, res, next) => {
  try {
    const clothesObject = req.body;
    const clothesData = await clothes.create(clothesObject);
    res.status(200).send(clothesData);
  } catch (e) {
    next(e.message);
  }
});

router.get('/clothes/:id', async (req, res, next) => {
  try {
    const clothesId = parseInt(req.params.id);
    const clothesData = await clothes.findOne({ where: { id: clothesId } });
    res.status(200).send(clothesData);
  } catch (e) {
    next(e.message);
  }
});

router.put('/clothes/:id', async (req, res, next) => {
  try {
    const clothesId = parseInt(req.params.id);
    const clothesObject = req.body;
    const clothesData = await clothes.findOne({ where: { id: clothesId } });
    const updatedClothes = await clothesData.update(clothesObject);
    res.status(200).send(updatedClothes);
  } catch (e) {
    next(e.message);
  }
});

router.delete('/clothes/:id', async (req, res, next) => {
  try {
    const clothesId = parseInt(req.params.id);
    const deletedClothes = await clothes.destroy({ where: { id: clothesId } });
    res.status(200).send(deletedClothes);
  } catch (e) {
    next(e.message);
  }
});

// Export Router
module.exports = router;

















