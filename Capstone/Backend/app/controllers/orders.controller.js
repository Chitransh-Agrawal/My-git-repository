const db = require("../models");
const Order = db.orders;

// Create and Save a user
exports.create = (req, res) => {
  // Validate request
  /*
  if (!req.body.userId && !req.body.courseId) {
    res.status(400).send({ message: "Enrollment should have loggedIn UserId and CourseId" });
    return;
  }
*/
  // Create a new enrollment
  const order = new Order({
    address: { address:{_id:req.body.addressId}},
            product: { product:{_id:req.body.productId}},
            user: { user: "USER"},
            quantity: req.body.quantity
  });

  // Save User in the database
  order
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Enrollment error occurred, please try again later."
      });
    });
};
