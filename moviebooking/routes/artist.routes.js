

var express = require('express');
const findAllArtists = require('../controllers/artist.controller');
var artistRouter = express.Router()



artistRouter.get('/artists', async (req, res)=>{
    let data = await findAllArtists();
    res.json(data);
}
)


module.exports = artistRouter;