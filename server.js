'use strict';

const express = require('express')
const axios = require('axios')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/cocktail', {useNewUrlParser: true, useUnifiedTopology: true});

const PORT = process.env.PORT || 8000

/////////////////moduls /////////////

const getCocktail = require('./cocktail.control')
const {createFav, getFav, deleteFav, updateFav} = require('./cruds')

//////////main root////////////

//http://localhost:3002/
app.get('/', (req,res)=> {
    res.send ('Welcome from main root')
});

/////////crud/////////

app.get('/cocktail', getCocktail)

app.post('/cocktail/favorite', createFav)
app.get('/cocktail/favorite', getFav)
app.delete('/cocktail/favorite/:c_id', deleteFav)
app.put('/cocktail/favorite/:c_id', updateFav)










app.listen(PORT, ()=> {
    console.log(`Im listening to ${PORT}`);
})