module.exports = mongoose => {
    const Product = mongoose.model(
        "product",
        mongoose.Schema(
          {
            name: { type : String , required : true },
            category: { type : String , required : true },
            manufacturer: { type : String , required : true },
            imageURL: { type : String , required : true },
            availableItems: { type : Number , required : true },
            description: { type : String, required: true },
            price: { type : Number , required : true },
            


            
          },
          { timestamps: true }
        )
      );
    
      return Product;
    };