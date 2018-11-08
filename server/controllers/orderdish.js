const {Restaurants,Orders,OrdersDishes} = require('../models');



const createOrderDish = async(req,res) => {
    try{

        const orderdish = await OrdersDishes.create(req.body).then()
        if(!orderdish) res.status(400).json({message:"Error to create orderdish"})

        return res.status(200).json({message:"Order detail created successfully","id":orderdish.id})

    }catch(e){
        return res.status(400).json({e})
    }
}




module.exports = {
    createOrderDish
} 