'use strict';

const axios = require('axios')
const cocktailModel = require('./cocktail.model')

const getCocktail = async (req,res) => {
    await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic').then(data => {
        const response = data.data.drinks.map(i => {
            return new cocktailModel(i);
        });
        res.send(response);
    }).catch(err => {
        console.log(err);
    })
}

module.exports = getCocktail;