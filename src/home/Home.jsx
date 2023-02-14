import React from "react";
import Featured from "../components/Feature/Featured";
import List from "../components/Lists/List";
import Navbar from "../components/Navbar/Navbar";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.home}>
      <Navbar />
      <Featured type="movies" />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
};

export default Home;
