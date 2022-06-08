/*
to access the state we use (useSelector)

 */

import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="ui four wide column  " key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="ui card">
              <div className="ui image">
                <img src={image} alt={title} />
              </div>
              <div className="ui content">
                <div className="ui header">{title}</div>
                <div className="ui meta price">${price}</div>
                <div className="ui meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <> {renderList}</>;
};

export default ProductComponent;
