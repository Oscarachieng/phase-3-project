import { useRef, useState, useEffect } from "react";
// ?import { Link, useNavigate } from "react-router-dom";

// const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Sign = () => {
//   const userRef = useRef();
//   const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [course, setCourse] = useState("");

  const [year_study, setYear_study] = useState("");

//   const [password, setPassWord] = useState("");
//   const [validPassWord, setValidPassWordd] = useState(false);
//   const [passWordFocus, setPassWordFocus] = useState(false);

//   const [location, setLocation] = useState(2000);

//   useEffect(() => {
//     userRef.current.focus();
//   }, []);

//   useEffect(() => {
//     setValidName(USER_REGEX.test(name));
//   }, [name]);

//   useEffect(() => {
//     setValidPassWordd(PWD_REGEX.test(password));
//   }, [password]);

  const handleSubmitClick = (event) => {
    event.preventDefault();

//     const formData = {
//       name: name,
//       email: email,
//       location: location,
//       password: password,
//     };
    
    
    
//     fetch("https://phase-3-sinatra-project.herokuapp.com/users", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: JSON.stringify(formData),
//     })
//       .then((r) => r.json())
//       .then((newUserItem) => console.log(newUserItem));

//     setName("");
//     setLocation("");
//     setEmail("");
//     setPassWord("");
//     navigate("/login")
   };

  return (
    <>
      <div className="comment-form-new">
        <h3>User Registration form :</h3>
        <form onSubmit={handleSubmitClick}>
          <h5> FirstName:</h5>
          <input
            type="text"
            name="firstname"
            onChange={(event) => setFirstName(event.target.value)}
            value={firstName}
            placeholder="Enter your First Name here"
            required
          />
         
          <h4>Last Name:</h4>
          <input
            type="text"
            name="lastName"
            onChange={(event) => setLastName(event.target.value)}
            value={lastName}
            placeholder="Enter Your Last Name"
            required
           
          />
          <h4>Year:</h4>
          <input
            type="text"
            name="year_study"
            onChange={(event) => setStudy_year(event.target.value)}
            value={year_study}
            placeholder="Enter Your Year of Study"
            required
            
          />
          <h4>Course:</h4>
          <input
            type="text"
            onChange={(e) => setCourse(e.target.value)}
            value={course}
            placeholder="Enter Password here"
            required
          />
          <button
            type="submit"
           
          >
            Register
          </button>
        </form>
        <p>
          Already registered?
          <br />
          <span className="line">
            <Link to={"/login"}>Sign Up</Link>
          </span>
        </p>
      </div>
    </>
  );
};

export default Sign;
