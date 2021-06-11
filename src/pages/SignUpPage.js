import React, { useRef } from "react";
import "../css/SignUpPage.css";
import { auth } from "../firebase";

function SignUpPage() {
  const emailref = useRef(null);
  const passwordref = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailref.current.value,
        passwordref.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailref.current.value,
        passwordref.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="signuppage">
      <form>
        <h1>Sign In</h1>
        <input ref={emailref} type="email" placeholder="Email" />
        <input ref={passwordref} type="password" placeholder="Password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>

        <h4>
          <span className="signuppage__gray">New to Netflix?</span>
          <span className="signuppage__link" onClick={register}>
            Sign Up now
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpPage;
