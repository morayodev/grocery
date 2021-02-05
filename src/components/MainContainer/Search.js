import React from 'react'
import { BiSearchAlt2 } from "react-icons/bi";

function Search() {
    return (
      <div>
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
      </div>
    );
}

export default Search
