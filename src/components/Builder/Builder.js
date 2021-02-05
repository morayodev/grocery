import React from "react";
import WelcomeShop from "../MainContainer/WelcomeShop";
import About from "../MainContainer/About";
import Products from "../MainContainer/Products";
import { connect } from "react-redux";
// import "../MainContainer/WelcomeShop.css";

import Search from "../MainContainer/Search";
// import Cart from "../Cart/Cart";

const Builder = ({ products }) => {
  return (
    <>
      <div>
        <WelcomeShop />
        <About />
        <Search />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  md:px-10 px-5">
          {products.map((prod) => (
            <Products key={prod.id} productData={prod} />
          ))}
        </div>
        {/* <Cart /> */}
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Builder);
