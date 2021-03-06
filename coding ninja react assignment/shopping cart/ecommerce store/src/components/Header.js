import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import header from "../assets/header1.png";

function Header(props) {
  const cartAmount = () => {
    return props.products.reduce((acc, value) => {
      return acc + value.qty;
    }, 0);
  };

  return (
    <div className="header">
      <div className="header-container">
        <div><Link to="/">
          <img className="header" src={header} alt="faux boutique" />
        </Link></div>

        <div> <Link className="shopping-bag" to="/" >
    <button>All Products</button></Link></div>

        <div> <Link className="shopping-bag" to="/create" >
    <button>Add New Product</button></Link></div>
         
        <div> <Link className="shopping-bag"   to="/cart" >
    <button>cart</button>
          <div className={`cart-amount ${cartAmount() === 0 ? 'hide' : ''}`}>
            <span>{cartAmount() === 0 ? "" : cartAmount()}</span>
          </div>
        </Link></div>
        

       

       
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps)(Header);
