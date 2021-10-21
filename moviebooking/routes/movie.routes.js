

var express = require('express');
const { findAllMovies, findSingleMovie } = require('../controllers/movie.controller');



var movieRouter = express.Router();








movieRouter.get('/movies', async(req, res)=>{

    if(req.query.status==="PUBLISHED"){
        console.log(req.params.status);
        let allData1 = await findSingleMovie({published:true});
    res.json(allData1);

    }

    if(req.query.status==="RELEASED"){
        
        console.log(req.query.title);
        
        let allData2 = await findSingleMovie({ $or: [ { released:true }, { title:req.query.title }, { genres:req.query.genres}, { artists:req.query.artitst} ],
                                            
        });
    res.json(allData2);

    }

    
    else{
        let allData = await findAllMovies();
    res.json(allData);

    }
    
}
)



movieRouter.get('/movies/:id', async(req, res)=>{

    let singleData = await findSingleMovie({movieid:req.params.id});
    
    res.json(singleData);
}
)





module.exports = movieRouter;