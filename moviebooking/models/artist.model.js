const mongoose = require('mongoose')




  let artistSchema = new mongoose.Schema({
    artistid: {
      type: Number,
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
      unique: true,
      lowercase: true,
      
    },
    wiki_url : {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      
    },
    profile_url : {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      
    },
    movies : {
      type: Array,
      required: true,
      unique: false,
      lowercase: true,
      
    }
  })

  let ArtistModel = mongoose.model('Artists', artistSchema);

  module.exports = ArtistModel;