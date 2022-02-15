import React, { useState } from "react";

import classes from "./MealItemForm.module.css";

import Input from "../../UI/Input";

const MealItemForm = ({ id, onAddItem }) => {
  const [amount, setAmount] = useState(1);

  return (
    <form className={classes.form}>
      <Input
        label='Amount'
        input={{
          id: `amount_${id}`,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          onChange: (e) => setAmount(e.target.value),
          value: amount,
        }}
      />
      <button type='button' onClick={() => onAddItem(amount)}>
        + Add
      </button>
    </form>
  );
};

export default MealItemForm;
