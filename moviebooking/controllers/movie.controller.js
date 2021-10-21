const MovieModel = require("../models/movie.model");



module.exports.findAllMovies =  async function(){
    let data =  await MovieModel.find().then((doc)=>{
        return doc;
    })
    
        
        return data;
   
}

module.exports.findSingleMovie =  async function(obj){ 
   console.log(obj);
    let data =  await MovieModel.find(obj).then((doc)=>{
        
        return doc;
    })
        
    
        return data;
   
}

module.exports.findShows = async function(id){
    
    let data =  await MovieModel.find({movieid:id}, {projection : {shows}}).then((doc)=>{
        
        return doc;
    })
    
        console.log(obj);
        return data;
   
    
}




