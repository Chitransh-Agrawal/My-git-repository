const express = require("express");
const app = express();
const port =8085;
const cors = require('cors');

const db = require("./models");
const genreRouter = require("./routes/genre.routes");
const artistRouter = require("./routes/artist.routes");
const movieRouter = require("./routes/movie.routes");
const userRouter = require("./routes/user.routes")

var corsOption ={
  origin :'http://localhost:3000'
};
app.use(cors(corsOption));


/*
http = require('http');
https=require('https');
*/

 app.use( '/api', genreRouter);
 app.use( '/api', artistRouter);
app.use( '/api', movieRouter);
app.use('/api', userRouter);


app.get('/api', (req, res) => {
    res.json({ message: "Welcome to Upgrad Movie booking application development." });
  });






db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
    
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });


  app.listen(port,()=>{
      console.log('listening...');
  })

  /*
app = http.createServer((req,res)=>{
    if(req.url==='/movies'){
        res.write('All Movies Data in JSON format from Mongo DB');
        res.end();
    }

    if(req.url==='/genres'){
        res.write('All Genres Data in JSON format from Mongo DB');
        res.end();
    }
    if(req.url==='/artists'){
        res.write('All Artists Data in JSON format from Mongo DB');
        res.end();
    }

})

app.listen(9000);
*/
