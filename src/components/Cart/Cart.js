import React from 'react'
import { connect } from "react-redux";
import "../MainContainer/WelcomeShop.css";
import { removeFromCart } from "../Redux/Shopping/Shopping-action"

const Cart = ({ itemData,removeCart}) => {
  return (
    <>
      {/* <div className="flex justify-between"> */}
      <div className="flex md:flex-row flex-col justify-center px-5 md:px-20 mr-3 mb-3 border border-gray-300 rounded shadow-2xl">
        <div className="imgwid">
          <img
            className="store-img "
            src={itemData.image}
            alt="cake"
          />
        </div>
        <div className=" text-center px-10 py-4">
          <h1>{itemData.title}</h1>
          <h1 className="my-10">{itemData.description}</h1>
          <h1>${itemData.price}</h1>
          <button
            onClick={() => removeCart(itemData.id)}
            className="p-2 mt-2 text-white border-red-700 rounded bg-red-700"
          >
            DELETE
          </button>
        </div>
      </div>

      {/* </div> */}
    </>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    removeCart:(id)=>dispatch(removeFromCart(id))
  }
}

export default connect(null,mapDispatchToProps)( Cart)
