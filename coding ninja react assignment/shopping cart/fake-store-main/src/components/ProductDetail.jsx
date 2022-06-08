/*
to create the new global state @store we need to dispatch an action which will go to the reducers 
and according to the action type it will create a new global state 
 */

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";
import { useSelector } from "react-redux";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { title, image, price, category, description } = product;
  const { productId } = useParams();
  console.log(productId);
  const dispatch = useDispatch();
  console.log(product);

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.error(err);
      });

    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading </div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className=" vertical divider">AND</div>
            <div className=" middle aligned row">
              <div className=" column lp">
                <img className="ui fluid image" src={image} alt={title} />
              </div>
              <div className="ui column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="ui hidden content">
                    <i className="ui shop icon"></i>
                  </div>
                  <div className="ui visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
