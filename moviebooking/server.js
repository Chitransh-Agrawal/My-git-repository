http = require('http');
https=require('https');
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

