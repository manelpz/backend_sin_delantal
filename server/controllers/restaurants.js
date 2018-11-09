
const {Restaurants,Addresses_Restaurants,Dishes,Users,Comments} = require("../models");



const getAllRestaurants =  async(req,res) => {
    let allRestaurants = await Restaurants.findAll({where:{},include:[
       {
           model:Users,
           as:"user"
       },
       {
           model:Addresses_Restaurants,
           as:"address_restaurant"          
       }/*,
       {
           model:Dishes,
           as:"dish"
       }*/
    ]})
     return res.status(200).json(allRestaurants);
}



const  getOneRestaurant = async(req,res) => {
    let getRestaurant = await Restaurants
    .findOne({where:{id:req.params.id},include:[
        {
            model:Users,
            as:"user"
        },
        {
            model:Addresses_Restaurants,
            as:"address_restaurant"
        }
    ]})
     
     return res.status(200).json(getRestaurant)
}


const createRestaurant = async(req,res) => {
    
    try{

       // req.body.restaurant_id = req.user.id
        
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
    createRestaurant,
    getAllRestaurants,
    getOneRestaurant

}