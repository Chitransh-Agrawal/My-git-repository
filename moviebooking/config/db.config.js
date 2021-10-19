var mongoClient = require('mongodb').mongoClient;
var dbUrl = "mongodb://localhost:27017/moviesdb";

const client = new mongoClient(dbUrl);
