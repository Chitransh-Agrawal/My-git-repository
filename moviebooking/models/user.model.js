const mongoose = require('mongoose')




  let userSchema = new mongoose.Schema({
    userid: {
      type: Number,
      required: true,
      unique: true,
      lowercase: true,
      
    },
    email : {
      type: email,
      required: true,
      unique: true,
      lowercase: true,
      
    },
    first_name : {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        
      },
      last_name : {
        type: String,
        required: true,
        unique: false,
        lowercase: true,
        
      },
      username : {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        
      },
      contact : {
        type: Number,
        required: true,
        unique: true,
        lowercase: true,
        
      },
      password : {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        
      },
      role : {
        type: String,
        required: true,
        unique: false,
        lowercase: true,
        
      },
      isLoggedIn : {
        type: Boolean,
        required: true,
       
        
      },
      uuid : {
        type: String,
        required: true,
        unique: true,
        
        
      },
      accesstoken : {
        type: String,
        required: true,
        unique: true,
        
        
      },
    
      coupons : {
        type: Array,
        
        },

        bookingRequests : {
            type: Array,
            
            }
       
  })

  let UserModel = mongoose.model('Users', userSchema);

  module.exports = UserModel;