import React from 'react';
import cake from "../images/cupcake-3.jpeg"
import "./WelcomeShop.css";


const About = () => {
    return (
      <>
        {/* <div className="flex md:justify-between flex-col p-10 md:p-32"> */}
        <div className="flex flex-col md:flex-row p-10 md:p-20">
          <div className="w-full md:w-4/12 md:mx-auto mb-20">
            <p>
              <span className="text-xl ">About </span>
              <span className="text-3xl text-pink-700">Us</span>
            </p>
            <p className="my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum eveniet repellat sit eaque, cum non error quisquam sunt
              numquam unde.
            </p>
            <button className="border border-black px-5 text-xl py-2 rounded">
              EXPLORE
            </button>
          </div>
          <div className="md:w-6/12 zoom w-full">
            <img src={cake} alt="cake" />
          </div>
        </div>
      </>
    );
}

export default About
