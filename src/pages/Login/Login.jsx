import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
import Signup from "../Signup/Signup";

const Login = () => {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="login">
      <div className="login-background">
        <img className="login-logo" src={logo} alt="" />
        <button className="login-btn" onClick={() => setSignIn(true)}>
          Sign In
        </button>
        <div className="login-gradient"></div>
      </div>

      <div className="login-body">
        {signIn ? (
          <Signup />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? enter your email to create or restart your
              membership.
            </h3>

            <div className="login-input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  onClick={() => setSignIn(true)}
                  className="login-getStarted"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
