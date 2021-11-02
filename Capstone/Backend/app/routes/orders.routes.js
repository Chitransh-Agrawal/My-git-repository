const auth = require("../../middleware/auth"); 


module.exports = app => {
  const orders = require("../controllers/orders.controller");
  
    var router = require("express").Router();
  
  router.post("/orders", orders.enroll);
    
    app.use('/',  router);
  };