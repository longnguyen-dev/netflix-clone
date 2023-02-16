import { KeyboardArrowRightRounded } from "@mui/icons-material";
import { useRef, useState } from "react";
import classes from "./Register.module.css";

const Register = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const emailRef = useRef();
  const passwordRef = useRef();

  function handleStart() {
    setEmail(emailRef.current.value);
    emailRef.current.value = "";
  }

  function handleFinished() {
    setPassword(passwordRef.current.value);
    passwordRef.current.value = "";
  }

  return (
    <div className={classes.register}>
      <div className={classes.top}>
        <img
          className={classes.logo}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/800px-Logonetflix.png?20170904093427"
          alt="netflix-logo"
        />
        <button className={classes.loginButton}>Sign In</button>
      </div>
      <div className={classes.container}>
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <span>
          Ready to watch? Enter your email to create or restart your membership.
        </span>
        {!email ? (
          <div className={classes.input}>
            <input
              type="email"
              placeholder="Your email address"
              ref={emailRef}
            ></input>
            <button onClick={() => handleStart()}>
              Get Started
              <KeyboardArrowRightRounded className={classes.buttonIcon} />
            </button>
          </div>
        ) : (
          <div className={classes.input}>
            <input
              type="password"
              placeholder="Your password"
              ref={passwordRef}
            ></input>
            <button onClick={() => handleFinished()}>
              Finished
              <KeyboardArrowRightRounded className={classes.buttonIcon} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
