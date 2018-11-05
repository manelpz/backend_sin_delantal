const  express =  require("express");
const router = express.Router();
const isAuthenticated =  require("../middlewares/isAuthenticated");
const {signUp,logIn} =  require("../controllers/users");
const {createRestaurant,getAllRestaurants,getOneRestaurant} =  require("../controllers/restaurants")
//const {getAllRestaurant} =  require("../controllers/restaurants")
const {createDishes,getAllDishes} =  require("../controllers/dishes")
//router.use('/users/',require('./user'));

router.post('/users/signup/',signUp)
router.post('/users/login/',logIn)
router.post('/restaurants',isAuthenticated,createRestaurant)
router.post('/restaurants/dishes',isAuthenticated,createDishes)
router.get('/restaurants',getAllRestaurants)
router.get('/restaurants/:id',getOneRestaurant)

//router.get('/restaurants/dishes',getAllDishes)
//router.get('/restaurants/dishes/:id',getOneDish)
router.get('/restaurants/dishes/:id',getAllDishes)

module.exports = router;
