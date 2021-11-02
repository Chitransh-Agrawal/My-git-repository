const http = require('http');
const httpStatus = require('http-status-codes');

const port =8000; /*ToDo 1: The port should be set to 8000 */
const app = http.createServer((req, res) => {
    if(req.url==="/ping"){
        console.log(req.url);
        res.writeHead(httpStatus.OK);
        
        res.end();
    }
    else{
        res.writeHead(httpStatus.NOT_FOUND);
        
        res.end();

    }
	/*ToDo 2: If the endpoint is /ping return status 200 with response text as pong */
    /*ToDo 3: Else it should return status 404 */
});

/* TODO 4: The app should create a listen() with parameter to be port */
app.listen(port);
module.exports = app;