module.exports = mongoose => {
    const Address = mongoose.model(
        "address",
        mongoose.Schema(
          {
            name: { type : String , required : true },
            city: { type : String , required : true },
            state: { type : String , required : true },
            street: { type : String , required : true },
            contactNumber: { type : Number , required : true },
            landmark: { type : String },
            zipCode: { type : Number , required : true },
            user:{type : Object}


            
          },
          { timestamps: true }
        )
      );
    
      return Address;
    };