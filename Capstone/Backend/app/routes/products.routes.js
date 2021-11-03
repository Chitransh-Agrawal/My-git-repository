const auth = require("../../middleware/auth"); 


module.exports = app => {
  const products = require("../controllers/products.controller");
  
    var router = require("express").Router();
  
   router.get("/products", products.searchProduct);

   router.get("/products/categories", products.getProductCategories);

   router.get("/products/:id", products.getProductById);

   router.post("/products", products.saveProduct);

   router.put("/products/:id", products.updateProduct);

   router.delete("/products/:id", products.deleteProduct);
    
    app.use('/', router);
  };