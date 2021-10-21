const mongoose = require('mongoose')






  let genreSchema = new mongoose.Schema({
    genreid: {
      type: Number,
      required: true,
      unique: true,
      lowercase: true,
      
    },
    genre : {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      
    }
  })

  let GenreModel = mongoose.model('genres', genreSchema);

  GenreModel.find();

  module.exports = GenreModel;