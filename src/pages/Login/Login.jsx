import classes from "./Login.module.css";

const Login = () => {
  return (
    <div className={classes.login}>
      <div className={classes.top}>
        <img
          className={classes.logo}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/800px-Logonetflix.png?20170904093427"
          alt="netflix-logo"
        />
      </div>
      <div className={classes.container}>
        <form className={classes.inputForm}>
          <h1>Sign In</h1>
          <input type="text" placeholder="Email or phone number"></input>
          <input type="password" placeholder="Password"></input>
          <button className={classes.buttonInput}>Sign in</button>
          <div className={classes.options}>
            <div className={classes.input}>
              <input type="checkbox"></input>
              <span>Remember</span>
            </div>
            <span>Need help?</span>
          </div>
        </form>
        <footer className={classes.footer}>
          <p className={classes.signup}>
            New to Netflix? <span>Sign up now</span>
          </p>
          <p className={classes.desciption}>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.<span> Learn more</span>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Login;
