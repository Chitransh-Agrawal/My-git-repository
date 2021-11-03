const db = require("../models");
const Product = db.products;

// Create and Save a new Course
exports.saveProduct= (req, res) => {
    // Validate request
  
  /*
  if(!req.body.token){
    res.status(400).json("Please Login first to access this endpoint!");
  }
  */
    

    // Create 
    const product = new Product({
      name: req.body.name,
            category: req.body.category,
            manufacturer: req.body.manufacturer,
            imageURL: req.body.imageUrl,
            availableItems: req.body.availableItems,
            description: req.body.description,
            price: req.body.price,


      
    });
  
    // Save Course in the database
    product
      .save()
      .then(data => {
        res.send(data);
      })
      .catch(err => {

        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Product."
        });
      });
  };



// Retrieve all Courses from the database by title.
// if no title is passed then all courses are retrieved
exports.searchProduct = (req, res) => {
    const category = req.query.category;
    var condition = category ? { category: { $regex: new RegExp(category), $options: "i" } } : {};
  
    Product.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Courses."
        });
      });
  };


// Retrieve all Courses from the database by Category.
//if no category is passed then all courses are retrieved


exports.getProductCategories = (req, res) => {
  
  Product.find({}).select('category').distinct('category')
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Internal error occured"
      });
    });
};



// Find a single Course with an id
exports.getProductById = (req, res) => {
    const id = req.params.id;
  
    Product.findById({_id: id})
      .then(data => {
        if (!data)
          res.status(404).send({ message: "No Product found for ID - " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Course with id=" + id });
      });
  };

// Update a course by the id in the request
exports.updateProduct= (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
    
    Product.findOneAndUpdate({ _id: req.params.id }, req.body, { useFindAndModify: false, upsert: true, setDefaultsOnInsert: true })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: "No Product found for ID " + id
          });
        } else res.send({ message: "Product was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Course with id=" + id
        });
      });
  };

// Delete a Course with the specified id in the request
exports.deleteProduct = (req, res) => {
  
    Product.findOneAndDelete({_id: req.params.id.toString()})
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `No Product found for ID - ${req.params.id}!`
          });
        } else {
          res.send({
            message: `Product with ID - ${req.params.id} deleted successfully!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Product with id=" + req.params.id
        });
      });
  };
