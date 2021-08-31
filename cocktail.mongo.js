'use strict';

const mongoose = require('mongoose');

const cocktailSchema = new mongoose.Schema({
    strDrink: String,
    strDrinkThumb:String
  });

  const cocktailMongo = mongoose.model('cocktail', cocktailSchema);

  module.exports = cocktailMongo