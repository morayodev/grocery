import React from 'react'
import "./WelcomeShop.css"


const WelcomeShop = () => {
    return (
      <div className="bgImage text-center">
          <h1 >
            <span className="text-white text-3xl">Welcome To </span>
            <span className="text-pink-700 text-4xl">Grandma's</span>
          </h1>
          <button className="  border border-black px-5 text-xl py-2 rounded">EXPLORE</button>
        
      </div>
    );
}

export default WelcomeShop
