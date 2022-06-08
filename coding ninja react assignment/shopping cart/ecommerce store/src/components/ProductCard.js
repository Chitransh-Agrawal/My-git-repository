import React from "react";

function ProductCard({ product }) {

  const handleDelete = ()=>[
    alert( "Product Deleted")
  ]
 

  return (
    <div className="product-card">
      <img src={product.image} alt="product thumbnail" />
      <h4 id="price">{(product.price).toFixed(2)}</h4>
      <p contenteditable id="title">{product.title}</p>
      <br/>
                <button className="edit-btn">Edit</button>
                <span>   </span>
                <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default ProductCard;
