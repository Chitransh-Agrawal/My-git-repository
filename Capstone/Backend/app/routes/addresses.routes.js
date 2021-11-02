const auth = require("../../middleware/auth"); 


module.exports = app => {
  const addresses = require("../controllers/addresses.controller");
  
    var router = require("express").Router();
  
    router.post("/addresses", addresses.enroll);
    
    app.use('/',  router);
  };