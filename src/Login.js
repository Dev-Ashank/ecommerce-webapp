import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate,  } from "react-router-dom";
import { auth } from "./firebase";
import "./Login.css";
function Login() {
    const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
const signIn = (e) => {
    e.preventDefault();

    //firebase login
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    if(user) navigate('/');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  });
}


const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    if(auth) navigate('/');
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("error in signUp "+errorMessage);
  });
}

  return (
    <div className="login">
      <Link to={"/"}>
        <img
          className="login_logo" alt=""
          src="https://companieslogo.com/img/orig/AMZN_BIG-accd00da.png?t=1632523695"
        />
      </Link>
      <div className="login_container">
        <h1>Sign-in</h1>
        <form action="">
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login_signinButton" onClick={signIn}>Sign in</button>
        </form>
        <div className="createAccount">
          <h5>New to Amazon?</h5>
          
          <button onClick={event => signUp(event)} type="submit" className="createAccount_button">Create Account</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
