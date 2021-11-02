const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");



const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.addresses = require("./addresses.model.js")(mongoose);

db.users = require("./user.model.js")(mongoose);
db.orders = require("./orders.model.js")(mongoose);
db.products = require("./products.model.js")(mongoose);

module.exports = db;