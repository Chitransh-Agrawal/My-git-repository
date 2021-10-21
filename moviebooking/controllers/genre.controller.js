
const GenreModel = require("../models/genre.model");

const findAllGenres =  async function(){
    let data =  await GenreModel.find().then((doc)=>{
        return doc;
    })
    
        
        return data;
   
}




module.exports = findAllGenres;