import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Sign = () => {
  const userRef = useRef();

  const [name, setName] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState("");

  const [password, setPassWord] = useState("");
  const [validPassWord, setValidPassWordd] = useState(false);
  const [passWordFocus, setPassWordFocus] = useState(false);

  const [location, setLocation] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(name));
  }, [name]);

  useEffect(() => {
    setValidPassWordd(PWD_REGEX.test(password));
  }, [password]);

  const handleSubmitClick = (event) => {
    event.preventDefault();

    const formData = {
      name: name,
      email: email,
      location: location,
      password: password,
    };
    fetch("http://localhost:9292/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((newUserItem) => console.log(newUserItem));

    setName("");
    setLocation("");
    setEmail("");
    setPassWord("");
  };

  return (
    <>
      <div className="comment-form-new">
        <h3>User Registration form :</h3>
        <form onSubmit={handleSubmitClick}>
          <h5>Name:</h5>
          <input
            type="text"
            name="name"
            ref={userRef}
            autoComplete="off"
            onChange={(event) => setName(event.target.value)}
            value={name}
            placeholder="Enter your Name here"
            onFocus={() => setUserFocus(true)}
            onBlur={() => setUserFocus(false)}
            required
          />
          <p
            id="uidnote"
            className={
              userFocus && name && !validName ? "instructions" : "offscreen"
            }
          >
            4 to 24 characters.
            <br />
            Must begin with a letter.
            <br />
            Letters, numbers, underscores, hyphens allowed.
          </p>

          <h4>Location:</h4>
          <input
            type="text"
            name="location"
            onChange={(event) => setLocation(event.target.value)}
            value={location}
            placeholder="Enter Your Country"
            required
            onFocus={() => setPassWordFocus(true)}
            onBlur={() => setPassWordFocus(false)}
          />
          <h4>Email_address:</h4>
          <input
            type="email"
            name="email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            placeholder="Enter Your Email"
            required
            onFocus={() => setPassWordFocus(true)}
            onBlur={() => setPassWordFocus(false)}
          />
          <h4>Password:</h4>
          <input
            type="password"
            onChange={(e) => setPassWord(e.target.value)}
            value={password}
            placeholder="Enter Password here"
            required
            onFocus={() => setPassWordFocus(true)}
            onBlur={() => setPassWordFocus(false)}
          />
          <p
            id="pwdnote"
            className={
              passWordFocus && !validPassWord ? "instructions" : "offscreen"
            }
          >
            8 to 24 characters.
            <br />
            Must include uppercase and lowercase letters, a number and a special
            character.
            <br />
            Allowed special characters:{" "}
            <span aria-label="exclamation mark">!</span>{" "}
            <span aria-label="at symbol">@</span>{" "}
            <span aria-label="hashtag">#</span>{" "}
            <span aria-label="dollar sign">$</span>{" "}
            <span aria-label="percent">%</span>
          </p>

          <button
            type="submit"
            disabled={!validName || !validPassWord ? true : false}
          >
            Register
          </button>
        </form>
        <p>
          Already registered?
          <br />
          <span className="line">
            <Link to={"/login"}>Sign In</Link>
          </span>
        </p>
      </div>
    </>
  );
};

export default Sign;
