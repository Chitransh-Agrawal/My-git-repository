import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Fuse from "fuse.js";

import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import AddToCartButton from "../components/AddToCart";

import { updateCategory } from "../actions/actions";

function Store(props) {
  function handleChange(e) {
    props.updateCategory(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

const productResults = props.products;

  return (
    <div className="store-container">
      <div className="store-nav">
        <form onSubmit={handleSubmit}>
          <select
            className="dropdown"
            onChange={handleChange}
            value={props.currentCategory?props.currentCategory:"Sort"}
            aria-label="dropdown"
          >
            
            <option value="Lowest Price">Low Price</option>
            
          </select>
        </form>
       
      </div>
      <div className="product-container">
        {productResults.map((product) => {
          if (!props.currentCategory) {
            return (
              <div className="product-block" key={product.id}>
                <Link to={`/product/${product.id}`}>
                  <ProductCard product={product} />
                </Link>
              
              </div>
            );
          }

          if (product.category === props.currentCategory) {
            return (
              <div className="product-block" key={product.id}>
                <Link to={`/product/${product.id}`}>
                  <ProductCard product={product} />
                </Link>
                <AddToCartButton id={product.id} />
              </div>
            );
          }

          return "";
        })}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    products: state.products,
    currentCategory: state.currentCategory,
    currentQuery: state.currentQuery,
  };
};

export default connect(mapStateToProps, { updateCategory })(Store);
