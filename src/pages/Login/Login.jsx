import classes from "./Login.module.css";

const Login = () => {
  return (
    <div className={classes.login}>
      <div className={classes.wrapper}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
          alt=""
        />
      </div>
      <div className={classes.container}>
        <h1>Sign in</h1>
        <form action="">
          <input type="email" placeholder="Enter your email!" />
          <input type="password" placeholder="Password" />
          <button>Sign In</button>
          <p>
            New to Netflix <span>Sign up now</span>
          </p>
          <p>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.<span>Learn more</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
