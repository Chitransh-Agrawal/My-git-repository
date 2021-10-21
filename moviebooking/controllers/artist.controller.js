
const ArtistModel = require("../models/genre.model");

const findAllArtists =  async function(){
    let data =  await ArtistModel.find().then((doc)=>{
        return doc;
    })
    
        
        return data;
   
}




module.exports = findAllArtists;