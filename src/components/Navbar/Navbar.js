import React, { useState}from 'react'
import logo from '../images/logo.svg'
import { FaShoppingCart } from 'react-icons/fa';
import {GiHamburgerMenu} from 'react-icons/gi'


const Navbar = (props) => {
    const [dropdown, setDropdown] = useState(false);

    const setDropdownhandler = () => {
        if (dropdown === true) {
            setDropdown(false)
        } else {
            setDropdown(true);
        }
   
     };
    return (
      <>
        <div className="flex justify-between items-center md:mr-20 md:ml-10 md:py-3 p-5">
          <img src={logo} alt="logo" />
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
          <div className="md:flex border border-black rounded px-5 py-2 items-center hidden">
            <FaShoppingCart />
            <p className="pl-5">4 items- $10.98</p>
          </div>
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
            <div className="md:hidden flex mb-2 border border-black rounded px-5 py-2 items-center">
              <FaShoppingCart />
              <p className="pl-5">4 items- $10.98</p>
            </div>
          </div>
        </div>
      </>
    );
}

export default Navbar

