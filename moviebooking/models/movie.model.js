const mongoose = require('mongoose')




  let movieSchema = new mongoose.Schema({
    movieid: {
      type: Number,
      required: true,
      unique: true,
      lowercase: true,
      
    },
    title : {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      
    },
    published : {
      required: true,
      },
    released : {
      required: true,
      },
      poster_url : {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        },
        release_date : {
          type: String,
          required: true,
          unique: false,
          lowercase: true,
          
        },
        publish_date : {
          type: String,
          required: true,
          unique:false,
          lowercase: true,
          
        },
        artists : {
          type: Array,
          required: true,
          unique: false,
          lowercase: true,
          
        },
        genres : {
          type: Array,
          required: true,
          unique: false,
          lowercase: true,
          
        },
        duration : {
          type: Number,
          required: true,
          unique: false,
          lowercase: true,
          
        },
        critic_rating : {
          type: Number,
          required: true,
          unique: false,
          lowercase: true,
          
        },
        trailer_url : {
          type: String,
          required: true,
          unique: true,
          lowercase: true,
          
        },
        wiki_url : {
          type: String,
          required: true,
          unique: true,
          lowercase: true,
          
        },
        story_line : {
          type: String,
          required: true,
          unique: true,
          },
          shows : {
            type: Array,
            required: true,
            unique: false,
            lowercase: true,
            
          }
  })

  let MovieModel = mongoose.model('Movies', movieSchema);

  module.exports = MovieModel;