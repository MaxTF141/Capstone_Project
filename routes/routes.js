const { requireAuth } = require('../middleware/RequireAuth.js');
const { verifyAToken, createToken } = require('../middleware/AuthenticatedUser.js');

module.exports = app => {
    var router = require("express").Router();

    // users routes
    const user = require("../controllers/UsersController.js");
    router.post("/register", user.create);

    router.post('/users', user.loginUser)
    
    router.get("/users", user.findAll);

    router.get("/users/:id", user.findOne);
    
    router.put("/users/:id", user.update);
    
    router.delete("/users/:id", user.delete);

    // logout 
    router.get('/signOut', verifyAToken, user.signOut);
  
    // items routes
    const restaurant = require('../controllers/RestaurantsController.js');
    router.post("/items", restaurant.create);
  
    router.get("/items", restaurant.findAll);

    router.get("/items/:id", verifyAToken, requireAuth, restaurant.findOne);
  
    router.put("/items/:id", restaurant.update);
  
    router.delete("/items/:id", restaurant.delete);
    
    // Cart  routes
    const cart = require('../controllers/CartController.js');
    router.post("/user/:id/cart", cart.create);
  
    router.get("/user/:id/carts", cart.findAll);
  
    router.put("/user/:id/cart/:id", cart.update);
  
    router.delete("/user/:id/cart/:id", cart.delete);

    router.delete("/user/:id/cart/", cart.deleteAll);


    app.use('/', router);
  };