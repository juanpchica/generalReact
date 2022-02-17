import React, { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  console.log("REDUCER", action);
  switch (action.type) {
    case "ADD":
      let items = [];
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex !== -1) {
        console.log("itemIndex", itemIndex);
        items = state.items;
        items[itemIndex].amount += action.payload.amount;
      } else {
        items = [...state.items, action.payload];
      }

      return { ...state, items };

    default:
      break;
  }

  return state;
};

const CartProvider = (props) => {
  const [state, dispatch] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatch({ type: "ADD", payload: item });
  };

  const removeItemFromCartHandler = (id) => {
    //setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const cartContextValue = {
    items: state.items,
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
