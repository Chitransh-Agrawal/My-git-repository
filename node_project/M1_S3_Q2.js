const http = require('http');
const httpStatus = require('http-status-codes');

port = 3000;
var studentData = [];
const app = http.createServer((req, res) => {


    	if(req.url === '/students' && req.method === 'POST') {


		let data = '';
        
        req.on('data', (chunk) => {
            data += chunk;
        });

        req.on('end', () => {
            const obj = JSON.parse(data);
        
        console.log("object converted to JSON");
        console.log(obj.name);

    /* ToDo 1: Call the data event using the request object to store the chunks in data variable */
       if(obj.name===undefined || obj.place===undefined){
                 res.writeHead(httpStatus.BAD_REQUEST);
                 res.end();
                 
                 
             }
             else{
                studentData.push(obj);
                console.log(studentData);

                res.writeHead(httpStatus.OK, {"Content-Type":"application/json"});
                
                
                res.end(JSON.stringify(studentData));
               
             }
             
                 
                 
             

            });
         
            /*ToDo 2: Parse the data and assign to "obj" variable 
                      and if "name or place" property is not defined return status 400 */
            /*ToDo 3: Push the object to studentData array and return the object with status code of 200 and
                      content type of application/json */
        
	}
    
     else if(req.url === '/students' && req.method === 'GET') {
	     res.writeHead(httpStatus.OK, {'Content-Type':'application/json'});
                
                 res.end(JSON.stringify(studentData));
                 
		/* ToDo 4: Return the studentData array with status code of 200 and content type of application/json */
	}
    
    else {
        res.writeHead(httpStatus.NOT_FOUND, {'Content-Type': 'text/plain'});
		res.write('Not Found');
		res.end();
        
    }







});

app.listen(port);
module.exports=app;
/*ToDo 5: Export the app using modules.export */