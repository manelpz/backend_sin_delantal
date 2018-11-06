const {Restaurants,Orders} = require('../models');

const calculatePrice = async(req,res) => {

    const {date_init,date_due,houseId} =  req.body
    const date1 =  new Date(date_init);
    const date2 =  new Date(date_due);
    let timeDiff = Math.abs(date2.getTime() - date1.getTime());
    let dayDiff =  Math.ceil(timeDiff/(1000*3600*24))
    const house =  await Houses.findById(houseId)
    
    if(!house) res.status.json({message:"Restaurant does not exist"});
       
    const count_booking = await Bookings.count({where:{
            start_date:{
                $between:[date_init,date_due]
            },
            houseId:houseId
        }})

    //if(count_booking != 0) res.status(400).json({message:"The house is already booked"})
    
    let price =  dayDiff *  house.price
    res.status(200).json({price:price,message:"Order price calculated correctly"})
 }

 const createOrder = async() => {
 }

 module.exports = {
    calculatePrice,
    createOrder
} 