import React, { useState,useEffect}from 'react'
import logo from '../images/logo.svg'
import { FaShoppingCart } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from "react-router-dom";
import {connect} from "react-redux"


const Navbar = ({ cart }) => {
  const [countCart, setCountCart] = useState(0)
  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });
    setCountCart(count);
  },[cart, countCart]);
   
    const [dropdown, setDropdown] = useState(false);

    const setDropdownhandler = () => {
        if (dropdown === true) {
            setDropdown(false)
        } else {
            setDropdown(true);
        }
   
    };
  // const HandleChange = () => {
  //         props.history.push("/cart");
        
  //     }
    return (
      <>
        <div className="flex justify-between items-center md:mr-20 md:ml-10 md:py-3 p-5">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <div>
            <ul className="hidden md:flex  ml-20">
              <li className="pr-10"> Home </li>
              <li className="pr-10"> About </li>
              <li className="pr-10"> Store</li>
            </ul>
          </div>
          <div className="hidden md:ml-40">
            <p>+8082 88 66 82</p>
          </div>
          <Link to="/cart">
            <div className="md:flex border border-black rounded px-5 py-2 items-center hidden">
              <FaShoppingCart />
              <p className="pl-5">{countCart} items</p>
            </div>
          </Link>
          <GiHamburgerMenu
            className="md:hidden text-3xl text-yellow-500"
            onClick={setDropdownhandler}
          />
        </div>
        <div>
          <div className={dropdown ? "block md:hidden" : "hidden"}>
            <ul>
              <li className="p-2">Home</li>
              <li className="p-2">About</li>
              <li
                className="
                p-2"
              >
                Store
              </li>
            </ul>
            <Link to="/cart">
              <div className="md:hidden flex mb-2 border border-black rounded px-5 py-2 items-center">
                <FaShoppingCart />
                <p className="pl-5">{countCart} items</p>
              </div>
            </Link>
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

export default connect(mapStateToProps)(Navbar)

