import React, { useState } from "react";

const Footer = () => {

    const [isHovering, setIsHovering] = useState(false);
    const [email, setEmail] = useState ("");

   // mause hovering effect on Footer Subscribe button
    const handleMouseEnter = () => {
      setIsHovering(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    // submit handler

    const handleSubmit = (event) => {
        event.preventDefault ();
        const emailSubscriptionFormData = { email : email };
        fetch("https://62e76b330e5d74566af3e785.mockapi.io/newsletter", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(emailSubscriptionFormData),
        })
          .then((r) => r.json())
          .then((newEmail) => console.log(newEmail));
    
        setEmail("");
       
      
    }
  return (
    <div
      style={{
        backgroundColor: "black",
        display: "flex",
        justifyContent: "space-evenly",
        height: "200px",
        marginTop: "20px",
      }}
    >
      <div>
        <h4 style={{ color: "white" }}>About Us</h4>
        <p style={{ color: "grey" }}>Our Stories</p>
        <p style={{ color: "grey" }}>Awards</p>
        <p style={{ color: "grey" }}>Our Team</p>
      </div>
      <div>
        <h4 style={{ color: "white" }}>Company</h4>
        <p style={{ color: "grey" }}>Our Services</p>
        <p style={{ color: "grey" }}>Contacts</p>
        <p style={{ color: "grey" }}>Press</p>
      </div>
      <div>
        <h4 style={{ color: "white" }}>Resources</h4>
        <p style={{ color: "grey" }}>Our Blogs</p>
        <p style={{ color: "grey" }}>News Letters</p>
        <p style={{ color: "grey" }}>Pravacy Policy</p>
      </div>
      <div>
        <h4 style={{ color: "white" }}>Subscribe For NewsLetter</h4>
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(event => setEmail(event.target.value))}
          name="email"
          value={email}
          placeholder="Your Email"
          style={{
            width: "100%",
            borderColor: "transparent",
            height: "40px",
            backgroundColor: "smokewhite",
          }}
        />
        <button
          style={{
            height: "40px",
            fontSize: "large",
            marginTop: "20px",
            marginLeft: "170px",
            borderColor: "transparent",
            color: isHovering ? "orangered" : "white",
            backgroundColor: isHovering ? "white" : "orange"
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          type ="submit"
        >
          Subscribe
        </button>
        </form>
      </div>
    </div>
  );
};
export default Footer;
