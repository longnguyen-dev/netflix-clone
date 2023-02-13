import React from "react";
import Featured from "../components/Feature/Featured";
import Navbar from "../components/Navbar/Navbar";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.home}>
      <Navbar />
      <Featured type="movies" />
    </div>
  );
};

export default Home;
