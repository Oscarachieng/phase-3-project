// Review Page

import axios from "axios";
import React, { useEffect, useState } from "react";

const Reviews = () => {
  const [reviews, setRevviews] = useState([]);
  const [index, setIndex] = useState(0);
 const [profile_name, setProfileName] = useState("");
 const [review_text , setReviewText] = useState("");
 const [review_country, setReviewCountry] = useState("");

  // fetch the reveiew data
  useEffect(() => {
    axios
      .get("http://localhost:3000/data")
      .then((response) => {
        console.log(response.data);
        setRevviews(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  // review slide hnadle

  useEffect(() => {
    const lastIndex = reviews.length - 1;

    if (index > 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, reviews]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);


  // function to handle commnet form submit click

  const handleSubmitClick = (event)=> {
    event.preventDefault();
    
    const formData = {
      profile_name : profile_name,
      review_text : review_text,
      review_country : review_country
    };
    fetch("http://localhost:3000/data", {
      method: "POST",
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((newReviewItem) => setRevviews([...reviews,newReviewItem]));

      setProfileName ("");
      setReviewText ("");
      setReviewCountry ("");
  }

  // handle 

  return (
    <section className="reviews">
      <div className="comments">
        {reviews.map((review, reviewIndex) => {
          const { review_country, review_text, profile_name } = review;
          let position = "nextReviewSlide";
          if (reviewIndex === index) {
            position = "activeReviewSlide";
          }
          if (
            reviewIndex === index - 1 ||
            (index === 0 && reviewIndex === review.length - 1)
          ) {
            position = "lastReviewSlide";
          }
          return (
            <article className={position} key={profile_name}>
              <h2 className="profile-name">{profile_name}</h2>
              <p className="review-text">{review_text}</p>
              <h4 className="review-country">{review_country}</h4>
            </article>
          );
        })}
      </div>
      <div className="comment-form-new">
        <form onSubmit={handleSubmitClick}>
          <input 
          type="text" 
          name="profile_name"
          onChange={((event)=> setProfileName(event.target.value))}
          value = {profile_name}
          placeholder="Enter your Name here" 
          required />
          <input 
          type="text" 
          name="review_country"
          onChange={((event)=> setReviewCountry(event.target.value))}
          value= {review_country}
          placeholder="Enter Your Country" 
          required />
          <textarea
            type="text"
            name="review_text"
            onChange={((event)=> setReviewText(event.target.value))}
            value = {review_text}
            placeholder="Enter Your Comment here"
            required
          />
          <button type="submit">Add Comment</button>
        </form>
      </div>
    </section>
  );
};
export default Reviews;
