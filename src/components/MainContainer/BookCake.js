import React from 'react';
import { BiSearchAlt2 } from "react-icons/bi";
import "./WelcomeShop.css"
import cake from "../images/cupcake-3.jpeg";
import {HiShoppingCart} from "react-icons/hi"


const BookCake = () => {
    return (
      <>
        <div className="p-10 md:p-20">
          <div className="text-center">
            <h1>
              <span className="text-3xl">Our </span>
              <span className="text-3xl text-pink-700">Store</span>
            </h1>
          </div>
          <div>
            <ul className="flex md:justify-center justify-around my-5 flex-wrap md:flex-no-wrap md:mx-0 mt-5 ">
              <li className="md:m-5 m-2 border border-black rounded p-2">
                ALL
              </li>
              <li className="md:m-5 m-2 border border-black rounded p-2">
                CAKE
              </li>
              <li className="md:m-5 m-2 border border-black rounded p-2">
                CUPCAKE
              </li>
              <li className="md:m-5 m-2 border border-black rounded p-2">
                SWEETS
              </li>
              <li className="md:m-5 m-2 border border-black rounded p-2">
                DOUGHNUT
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center mt-4">
            <div className=" p-2 bg-pink-700 ">
              <BiSearchAlt2 className=" text-3xl py-1" />
            </div>
            <div>
              <input
                className=" border border-gray-400 rounded md:px-20  py-2 w-full "
                type="text"
                placeholder="items.."
              />
            </div>
          </div>
        </div>

        <div className="flex justify-around md:flex-row flex-col  px-5 md:px-20 mt-5 md:flex-wrap  flex-no-wrap">
          <div className=" imgwid mr-3 mb-3 border border-gray-300">
            <div className=" img-container ">
              <img className=" store-img " src={cake} alt="cake" />
              <span className="store-item-icon">
                <HiShoppingCart />
              </span>
            </div>
            <div className="flex justify-between px-3 py-4">
              <h1>CAKE</h1>
              <h1>$5</h1>
            </div>
          </div>

          <div className=" imgwid mr-3  mb-3 border border-gray-300">
            <div className=" img-container ">
              <img className=" store-img " src={cake} alt="cake" />
              <span className="store-item-icon">
                <HiShoppingCart />
              </span>
            </div>
            <div className="flex justify-between px-3 py-4">
              <h1>CAKE</h1>
              <h1>$5</h1>
            </div>
          </div>
          <div className=" imgwid mr-3  mb-3 border border-gray-300">
            <div className=" img-container ">
              <img className=" store-img " src={cake} alt="cake" />
              <span className="store-item-icon">
                <HiShoppingCart />
              </span>
            </div>
            <div className="flex justify-between px-3 py-4">
              <h1>CAKE</h1>
              <h1>$5</h1>
            </div>
          </div>
          <div className=" imgwid mr-3  mb-3  border border-gray-300">
            <div className=" img-container ">
              <img className=" store-img " src={cake} alt="cake" />
              <span className="store-item-icon">
                <HiShoppingCart />
              </span>
            </div>
            <div className="flex justify-between px-3 py-4">
              <h1>CAKE</h1>
              <h1>$5</h1>
            </div>
          </div>
          <div className=" imgwid mr-3  mb-3 border border-gray-300">
            <div className=" img-container ">
              <img className=" store-img " src={cake} alt="cake" />
              <span className="store-item-icon">
                <HiShoppingCart />
              </span>
            </div>
            <div className="flex justify-between px-3 py-4">
              <h1>CAKE</h1>
              <h1>$5</h1>
            </div>
          </div>
          <div className=" imgwid mr-3  mb-3 border border-gray-300">
            <div className=" img-container ">
              <img className=" store-img " src={cake} alt="cake" />
              <span className="store-item-icon">
                <HiShoppingCart />
              </span>
            </div>
            <div className="flex justify-between px-3 py-4">
              <h1>CAKE</h1>
              <h1>$5</h1>
            </div>
          </div>
          <div className=" imgwid mr-3  mb-3 border border-gray-300">
            <div className=" img-container ">
              <img className=" store-img " src={cake} alt="cake" />
              <span className="store-item-icon">
                <HiShoppingCart />
              </span>
            </div>
            <div className="flex justify-between px-3 py-4">
              <h1>CAKE</h1>
              <h1>$5</h1>
            </div>
          </div>
          <div className=" imgwid mr-3  mb-3 border border-gray-300">
            <div className=" img-container ">
              <img className=" store-img " src={cake} alt="cake" />
              <span className="store-item-icon">
                <HiShoppingCart />
              </span>
            </div>
            <div className="flex justify-between px-3 py-4">
              <h1>CAKE</h1>
              <h1>$5</h1>
            </div>
          </div>
          <div className=" imgwid mr-3  mb-3 border border-gray-300">
            <div className=" img-container ">
              <img className=" store-img " src={cake} alt="cake" />
              <span className="store-item-icon">
                <HiShoppingCart />
              </span>
            </div>
            <div className="flex justify-between px-3 py-4">
              <h1>CAKE</h1>
              <h1>$5</h1>
            </div>
          </div>
          {/* <div className=" mr-3 imgwid ">
            <img src={cake} alt="cake" />
          </div>
          <div className="mr-3 imgwid ">
            <img src={cake} alt="cake" />
          </div> */}
        </div>
      </>
    );
}

export default BookCake
