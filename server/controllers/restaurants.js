
const {Restaurants,Addresses_Restaurants} = require("../models");

const createRestaurant = async(req,res) => {
    
    try{

        req.body.restaurant_id = req.user.id
        
        const restaurant = await Restaurants.create(req.body)
        if(!restaurant) res.status(400).json({message:"Error to create restaurant"})
        
        const address = await Addresses_Restaurants.create({...req.body.restaurant,restaurant_id:restaurant.id})
        if(!address) return res.status(400).json({message:"Couldn't create any restaurant address "})

        
        return res.status(200).json({message:"Restaurant created successfully","id":restaurant.id})
    
    }catch(e){
        
        console.log(e.message)
        return res.status(400).json({e})
    }

}


module.exports = {
    createRestaurant

}