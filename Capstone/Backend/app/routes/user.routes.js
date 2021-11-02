const auth = require("../../middleware/auth"); 


module.exports = app => {
  const users = require("../controllers/auth.controller");
  
    var router = require("express").Router();
  
    router.post("/users", users.signUp);
    router.post("/auth", users.login);
    
    
    app.use('/',  router);
  };  