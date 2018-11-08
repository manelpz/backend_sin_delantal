const  express =  require("express");
const router = express.Router();
const isAuthenticated =  require("../middlewares/isAuthenticated");
const {calculatePriceValidation} = require("../middlewares/validations")
const {signUp,logIn} =  require("../controllers/users");
const {createRestaurant,getAllRestaurants,getOneRestaurant} =  require("../controllers/restaurants")

const {calculatePrice,createOrder} = require('../controllers/orders');
const {createOrderDish} = require('../controllers/orderdish');

const {createDishes,getAllDishes} =  require("../controllers/dishes")
//router.use('/users/',require('./user'));

router.post('/users/signup/',signUp)
router.post('/users/login/',logIn)
router.post('/restaurants',createRestaurant)
router.post('/restaurants/dishes',createDishes)

// TODO: implementar la validación con celebrate
// router.post('/orders/calculate',calculatePriceValidation,calculatePrice)
//router.post('/orders/calculate',calculatePrice)
router.post('/orders',createOrder)
router.post('/orders/detail',createOrderDish)



router.get('/restaurants',getAllRestaurants)
router.get('/restaurants/:id',getOneRestaurant)
//router.get('/restaurants/dishes',getAllDishes)
//router.get('/restaurants/dishes/:id',getOneDish)
router.get('/restaurants/dishes/:id',getAllDishes)
//router.get('/orders/:id',getOneOrder)

module.exports = router;
