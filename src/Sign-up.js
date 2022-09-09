
import React, { useState } from "react";

const Sign = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");


  const handleSubmitClick = (event) => {
    event.preventDefault();

    const formData = {
      name: name,
      email: email,
      location: location
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
            onChange={(event) => setName(event.target.value)}
            value={name}
            placeholder="Enter your Name here"
            required
          />
          <h4>Location:</h4>
          <input
            type="text"
            name="location"
            onChange={(event) => setLocation(event.target.value)}
            value={location}
            placeholder="Enter Your Country"
            required
          />
          <h4>Email_address:</h4>
          <input
            type="text"
            name="email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            placeholder="Enter Your Email"
            required
          />
         
          <button type="submit">Add Comment</button>
        </form>
      </div>
    </>
  );
};

export default Sign;
