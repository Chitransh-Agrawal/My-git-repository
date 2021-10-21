const UserModel = require("../models/user.model");

module.exports.signUp=function(){
    const userObj = new UserModel();

    userObj.save();
}

module.exports.login=function(){
    
}

module.exports.logout=function(id){
    
}

module.exports.getCouponCode=function(id){
    
}
module.exports.bookShow=function(id){
    
}