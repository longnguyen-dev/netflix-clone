import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";
import { useState } from "react";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div
      className={
        isScrolled ? `${classes.navbar} ${classes.scrolled}` : classes.navbar
      }
    >
      <div className={classes.container}>
        <div className={classes.left}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/800px-Logonetflix.png?20170904093427"
            alt="netflix-logo"
          />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className={classes.right}>
          <Search className={classes.icon} />
          <span>KID</span>
          <Notifications className={classes.icon} />
          <img
            src="https://ddtkey.com/assets/img/profile.png"
            alt="img-profile"
          />
          <div className={classes.profile}>
            <ArrowDropDown className={classes.icon} />
            <div className={classes.options}>
              <span className={classes.subnav}>Settings</span>
              <span className={classes.subnav}>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
