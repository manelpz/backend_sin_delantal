
const {Dishes,Restaurants} = require("../models");

const  getAllDishes = async(req,res) => {
    let allDishes = await Dishes.findAll()

    return res.status(200).json(allDishes)
}



const createDishes = async(req,res) => {
    
    try{

        const dish = await Dishes.create(req.body)
        if(!dish) res.status(400).json({message:"Error to create dishes"})
        
        return res.status(201).json(dish)
    

    }catch(e){
        
        console.log(e.message)
        return res.status(400).json({e})
    }

}

module.exports = {
    createDishes,
    getAllDishes
}




