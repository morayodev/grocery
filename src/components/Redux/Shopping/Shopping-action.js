import * as actionTypes from "./Shopping-Types"

export const addToCart = (itemID) => {
    return {
        type: actionTypes.ADDTOCART,
        id:itemID
    };
    
}
export const removeFromCart = (itemID) => {
  return {
    type: actionTypes.REMOVEFROMCART,
    id: itemID,
  };
};
export const adjustQty = (itemID, value) => {
  return {
    type: actionTypes.ADJUSTQTY,
    id: itemID,
    qty:value,
  }
}
// export const loadCurrentItem = (item) => {
//   return {
//     type: actionTypes.LOADCURRENTTEM,
//     item: item,
//   };
// };