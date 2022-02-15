import React from "react";

import HeaderCartButton from "./HeaderCartButton";

import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpeg";

const Header = ({ onShowCart }) => {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt='Meals' />
      </div>
    </>
  );
};

export default Header;
