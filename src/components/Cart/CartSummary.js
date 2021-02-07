import React, {useState,useEffect} from 'react'
import Cart from "./Cart"
import { connect } from "react-redux"
import "../MainContainer/WelcomeShop.css";


function CartSummary({ cart }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalitems, setTotalItems] = useState(0);
  useEffect(() => {
    let items = 0;
    let price = 0;
    cart.forEach(item => {
      items += item.qty;
      price += item.qty * item.price
    })
    setTotalPrice(price);
    setTotalItems(items)
  }, [
    cart,
    totalPrice,
    setTotalPrice,
    totalitems,
    setTotalItems,
  ]);
  return (
    <>
      <h1 className="text-center">
        <strong>Cart Summary</strong>
      </h1>
      <div className="md:flex flex-none justify-evenly py-20">
        <div>
          {cart.map((item) => (
            <Cart key={item.id} itemData={item} />
          ))}
        </div>
        <div className="shadow-2xl w-10/12 mx-auto cartSummary border border-gray-300 rounded p-10 text-center">
          <h1 className="mb-5">Total Item:{totalitems} items </h1>
          <h1>TotalPrice:$ {totalPrice}</h1>
          <button className="bg-indigo-800 text-white p-2 mt-5  border border-indigo-800 rounded">
            Proceed To Checkout
          </button>
        </div>
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
    return {
        cart:state.shop.cart
    }
}
export default connect(mapStateToProps)(CartSummary)
