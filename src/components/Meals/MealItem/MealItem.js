import React, { useContext } from "react";

import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const { addItem } = useContext(CartContext);

  const price = `$ ${props.price.toFixed(2)}`;

  const addNewItem = (amount) => {
    addItem({
      id: props.id,
      name: props.name,
      description: props.description,
      price,
      amount,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}> {price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddItem={addNewItem} />
      </div>
    </li>
  );
};

export default MealItem;
