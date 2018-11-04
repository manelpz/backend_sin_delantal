const  express =  require("express");
const router = express.Router();
const isAuthenticated =  require("../middlewares/isAuthenticated");
const {signUp,logIn} =  require("../controllers/users");
const {createRestaurant} =  require("../controllers/restaurants")
const {createDishes} =  require("../controllers/dishes")
//router.use('/users/',require('./user'));

router.post('/users/signup/',signUp)
router.post('/users/login/',logIn)
router.post('/restaurants',isAuthenticated,createRestaurant)
router.post('/restaurants/dishes',isAuthenticated,createDishes)

module.exports = router;
