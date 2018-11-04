
const {Dishes} = require("../models");

const createDishes = async(req,res) => {
    
    try{

        //req.body.restaurant_id = req.user.id
        
        const dish = await Dishes.create(req.body)
        if(!dish) res.status(400).json({message:"Error to create dishes"})
        
        // const address = await Addresses_Restaurants.create({...req.body.restaurant,restaurant_id:restaurant.id})
        // if(!address) return res.status(400).json({message:"Couldn't create any restaurant address "})
        
        //return res.status(200).json({message:"Dish created successfully","id":dish.id})
        return res.status(201).json(dish)
    

    }catch(e){
        
        console.log(e.message)
        return res.status(400).json({e})
    }

}

module.exports = {
    createDishes
}