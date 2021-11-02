module.exports = mongoose => {
    const Order = mongoose.model(
        "order",
        mongoose.Schema(
          {
            address: { type : Object , required : true },
            product: { type : Object , required : true },
            user: { type : Object , required : true },
            quantity: { type : Number , required : true }
          },
          { timestamps: true }
        )
      );
    
      return Order;
    };