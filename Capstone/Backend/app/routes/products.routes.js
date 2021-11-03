const auth = require("../../middleware/auth"); 


module.exports = app => {
  const products = require("../controllers/products.controller");
  
    var router = require("express").Router();
  
   router.post("/products", products.create);
    
    app.use('/', router);
  };