
 const db = require("../models");
 const Address = db.addresses;

// Create and Save a user
exports.addAddress = (req, res) => {
  // Validate request
 
  /*
  if (!req.header.token) {
    res.status(400).json("Please Login first to access this endpoint!" );
    return;
  }
*/
  if (req.body.zipcode.length!==6) {
    res.status(400).json("Invalid zip code!" );
    return;
  }
  if (req.body.contactNumber.toString().length!==10) {
    res.status(400).json("Invalid contact number!" );
    return;
  }

  
 let userfinder;
  Address.find({contactNumber:req.body.contactNumber})
  .then(data=>{userfinder=data._id})

  // Create a new enrollment
  const address = new Address({

            name: req.body.name,
            city: req.body.city,
            state: req.body.state,
            street: req.body.street,
            contactNumber: req.body.contactNumber,
            landmark: req.body.landmark,
            zipCode: req.body.zipcode,
          // user:  {$oid: userfinder}
    


    
  });

  // Save User in the database
  address
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Address error occurred, please try again later."
      });
    });
};
