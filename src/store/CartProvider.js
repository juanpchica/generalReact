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
      const updatedTotalAmount =
        state.totalAmount + action.payload.price * action.payload.amount;

      console.log(updatedTotalAmount, "TOTAL");

      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex !== -1) {
        items = state.items;
        items[itemIndex].amount += action.payload.amount;
      } else {
        items = [...state.items, action.payload];
      }

      return { ...state, totalAmount: updatedTotalAmount, items };

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
    totalAmount: state.totalAmount,
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
