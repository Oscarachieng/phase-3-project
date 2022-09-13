import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      email: email,
      password: passWord,
    };
    fetch("https://phase-3-sinatra-project.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => {
        return r.json();
      })
      .then((newUserItem) => {
        console.log(newUserItem);
      });

    setEmail("");
    setPassWord("");
    navigate("/");
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
