import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");
  //const [errMsg, setErrMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <>
      <div className="comment-form-new">
        <h3>User Login :</h3>
        <form onSubmit={handleSubmit}>
          <h5>Email Address :</h5>
          <input
            type="email"
            name="email"
            autoComplete="off"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            placeholder="Enter your Email Address here"
            required
          />
          <h4>Password:</h4>
          <input
            type="password"
            onChange={(e) => setPassWord(e.target.value)}
            value={passWord}
            placeholder="Enter Password here"
            required
          />
          <button type="submit">Login</button>
        </form>
        <p>
          Need an Account?
          <br />
          <span className="line">
            <Link to={"/sign"}>Sign Up</Link>
          </span>
        </p>
      </div>
    </>
  );
};

export default Login;
