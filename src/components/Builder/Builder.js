import React, {useState} from 'react'
import Toolbar from "../Toolbar/Toolbar";
import WelcomeShop from "../MainContainer/WelcomeShop";
import About from "../MainContainer/About"
import BookCake from "../MainContainer/BookCake";

const Builder = () => {
    // const [dropdown, setDropdown] = useState(false)
    
    // // const setDropdownhandler = () => {
    // //     if (dropdown === true) {
    // //         setDropdown(false)
    // //     } else {
    // //         setDropdown(true);
    // //     }
    //  const setDropdownhandler = () => {
    //     setDropdown(true)
    // }
    return (
      <div>
        <Toolbar/>
        <WelcomeShop />
        <About />
        <BookCake />
      </div>
    );
}

export default Builder
