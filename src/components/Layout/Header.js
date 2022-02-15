import React from "react";

import HeaderCartButton from "./HeaderCartButton";

import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpeg";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt='Meals' />
      </div>
    </>
  );
};

export default Header;