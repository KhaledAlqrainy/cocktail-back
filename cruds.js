'use strict';

const axios = require('axios');
const cocktailMongo = require('./cocktail.mongo')

const createFav = async (req,res)=> {
    const {strDrink, strDrinkThumb} = req.body;
    const newObj = new cocktailMongo ({
        strDrink:strDrink,
        strDrinkThumb:strDrinkThumb
    });
    newObj.save();
    res.send(newObj);
}

const getFav = async(req,res)=>{
    cocktailMongo.find({}, (err,data)=>{
        res.send(data);
    })
}

const deleteFav = async(req,res)=> {
    const{c_id}= req.params;
    cocktailMongo.remove({_id:c_id}, (err,data)=> {
        cocktailMongo.find({}, (err,data)=> {
            res.send(data)
        })
    })
};

const updateFav = async(req,res)=> {
    const{c_id}= req.params;
    const {strDrink, strDrinkThumb} = req.body;
    cocktailMongo.findByIdAndUpdate({_id:c_id},{strDrink,strDrinkThumb},{new:true}, (err,data)=> {
        res.send(data);
    })

};











module.exports= {
    createFav,
    getFav,
    deleteFav,
    updateFav
}