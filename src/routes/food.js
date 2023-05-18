`use strict`;

// Imports
const express = require('express');

const { food } = require('../models/index.js');

const router = express.Router();

// Routes
router.get('/food', async (req, res, next) => {
  try {
    const foodData = await food.findAll();
    res.status(200).send(foodData);
  } catch (e) {
    next(e.message);
  }
});

router.post('/food', async (req, res, next) => {
  try {
    const foodObject = req.body;
    const foodData = await food.create(foodObject);
    res.status(200).send(foodData);
  } catch (e) {
    next(e.message);
  }
});

router.get('/food/:id', async (req, res, next) => {
  try {
    const foodId = parseInt(req.params.id);
    const foodData = await food.findOne({ where: { id: foodId } });
    res.status(200).send(foodData);
  } catch (e) {
    next(e.message);
  }
});

router.put('/food/:id', async (req, res, next) => {
  try {
    const foodId = parseInt(req.params.id);
    const foodObject = req.body;
    const foodData = await food.findOne({ where: { id: foodId } });
    const updatedFood = await foodData.update(foodObject);
    res.status(200).send(updatedFood);
  } catch (e) {
    next(e.message);
  }
});

router.delete('/food/:id', async (req, res, next) => {
  try {
    const foodId = parseInt(req.params.id);
    const deletedFood = await food.destroy({ where: { id: foodId } });
    res.status(200).send(deletedFood);
  } catch (e) {
    next(e.message);
  }
});

// Export Router
module.exports = router;






















