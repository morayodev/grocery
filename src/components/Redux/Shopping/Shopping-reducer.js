import * as actionTypes from "./Shopping-Types";

const IntialState = {
  products: [
    //{id, title descr,price,img}
    {
      id: 1,
      title: "CupCake",
      price: 22.3,
      description:
        "Colorful, moist, delicious cupcakes, with extra frosting. Surreal. Cake, to go. Take-out cake. Paper or foil cups, to hold them.",
      image: "/image/cupcake-2.jpeg",
    },
    {
      id: 2,
      title: "Wedding cake",
      price: 109.2,
      description:
        "Wedding Cake is a potent indica-hybrid marijuana strain made by crossing Cherry Pie with Girl Scout Cookies. Wedding Cake provides relaxing and euphoric effects that calm the body and mind.  ",
      image: "/image/cake-2.jpeg",
    },
    {
      id: 3,
      title: "CupCake",
      price: 10.5,
      description:
        "Colorful, moist, delicious cupcakes, with extra frosting. Surreal. Cake, to go. Take-out cake. Paper or foil cups, to hold them.",
      category: "men clothing",
      image: "/image/cupcake-3.jpeg",
    },
    {
      id: 4,
      title: "Classic Vanilla Cake",
      price: 15.7,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans.",
      category: "men clothing",
      image: "/image/cake-1.jpeg",
    },
    {
      id: 5,
      title: "Classic Vanilla Cake",
      price: 15.7,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans.",
      category: "men clothing",
      image: "/image/cake-1.jpeg",
    },
    {
      id: 6,
      title: "Doughnut",
      price: 11.2,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans.",
      category: "men clothing",
      image: "/image/doughnut-3.jpeg",
    },
  
  ],
  cart: [], // {id, title descr,price,img}
  currentItem: null,
};
const shopReducer = (state=IntialState, action) => {
  switch (action.type) {
    case actionTypes.ADDTOCART:
      //Get the items from data the product array
      const item = state.products.find((prod) => prod.id === action.id);
      //Check if the items is in the cart already
      const inCart = state.cart.find((item) => item.id === action.id ? true : false)
      return {
        ...state,
        cart: inCart ? state.cart.map(item => item.id === action.id ?
          {
            ...item,
            qty: item.qty + 1
          } : item) : [...state.cart, { ...item, qty: 1 }]
      };
    case actionTypes.REMOVEFROMCART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.id),
      };
    case actionTypes.ADJUSTQTY:
      return {
        ...state,
        cart: state.cart.map((item) => item.id === action.id ? {...item, qty: action.qty}
            : item
          ),
        };
      // case actionTypes.LOADCURRENTTEM:
      // return {
      //   ...state,
      //   currentItem:action.item
      // };
        default:
            return state;
    }
}
export default shopReducer;