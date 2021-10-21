

var express = require('express');
const findAllGenres = require('../controllers/genre.controller');
var genreRouter = express.Router()



genreRouter.get('/genres', async(req, res)=>{
    
  var result = await findAllGenres();
   
   res.json(result);

   });




module.exports = genreRouter;