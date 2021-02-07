import React from 'react'
import Builder from './Builder';
import CartSummary from "../Cart/CartSummary";
import { Route, Switch } from "react-router-dom";
import Toolbar from "../Toolbar/Toolbar";



function Builder1() {
    return (
      <>
        <Toolbar />
        <Switch>
          <Route path="/" exact component={Builder} />
          <Route path="/cart" exact component={CartSummary} />
        </Switch>
      </>
    );
}
// const mapStateToProps = state =>{
//   return{
//     cart:state.shop.cart
//   }
// }
export default Builder1
