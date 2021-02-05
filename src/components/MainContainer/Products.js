import React from 'react';
import "./WelcomeShop.css"
import { HiShoppingCart } from "react-icons/hi"
import { connect } from "react-redux"
import {addToCart} from "../Redux/Shopping/Shopping-action"


const Products = ({ productData, addToCart }) => {
  return (
    <>
      {/* <div className=" md:flex-row flex-col  px-5 md:px-20 mt-5 md:flex-wrap  flex-no-wrap"> */}
      <div className=" mr-3 mb-3 border border-gray-300   ">
        <div className=" img-container    ">
          <img
            className="store-img w-full "
            src={productData.image}
            alt={productData.title}
          />
          <span className="store-item-icon">
            <HiShoppingCart
              className="text-3xl"
              onClick={() => addToCart(productData.id)}
            />
          </span>
        </div>
        <div className="px-3 py-4">
          <h1>
            <strong>{productData.title}</strong>
          </h1>
          <h1>{productData.description}</h1>
          <h1>
            Price:<strong>${productData.price}</strong>
          </h1>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart:(id)=>dispatch(addToCart(id))
  }
}
export default connect (null,mapDispatchToProps)(Products);
