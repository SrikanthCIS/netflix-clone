import React, { useState } from "react";
import "../css/LoginPage.css";
import SignUpPage from "../pages/SignUpPage";

function Login() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginpage">
      <div className="loginpage__background">
        <img
          className="loginpage__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png"
          alt=""
        />
        <button onClick={() => setSignIn(true)} className="loginpage__button">
          Sign In
        </button>
        <div className="loginpage__gradient" />
      </div>
      <div className="loginpage__body">
        {signIn ? (
          <SignUpPage />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere, Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="loginpage__input">
              <form>
                <input type="email" placeholder="E-maii Address" />
                <button
                  onClick={() => setSignIn(true)}
                  className="loginpage__getstarted"
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
}

export default Login;
