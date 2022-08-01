// Review Page

import axios from "axios";
import React, { useEffect, useState } from "react";

const Reviews = () => {
  const [reviews, setRevviews] = useState([]);
  const [profile_name, setProfileName] = useState("");
  const [review_text, setReviewText] = useState("");
  const [review_country, setReviewCountry] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = reviews.length;

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

  const autoScroll = true;
  let slideInterval;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  const auto = () => {
    slideInterval = setInterval(nextSlide, 5000);
  };

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  const handleSubmitClick = (event) => {
    event.preventDefault();

    const formData = {
      profile_name: profile_name,
      review_text: review_text,
      review_country: review_country,
    };
    fetch("http://localhost:3000/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((newReviewItem) => setRevviews([...reviews, newReviewItem]));

    setProfileName("");
    setReviewText("");
    setReviewCountry("");
  };

  return (
    <>
      <h2 className="review-title">What Our Clients Say</h2>
      <div className="slider">
        {reviews.map((review, index) => {
          const { review_country, review_text, profile_name } = review;
          return (
            <div
              className={index === currentSlide ? "slide current" : "slide"}
              key={profile_name}
            >
              {index === currentSlide && (
                <div className="content-review">
                  <h2>{profile_name}</h2>
                  <p className="content-title">{review_text}</p>
                  <h5>{review_country}</h5>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="comment-form-new">
        <form onSubmit={handleSubmitClick}>
          <input
            type="text"
            name="profile_name"
            onChange={(event) => setProfileName(event.target.value)}
            value={profile_name}
            placeholder="Enter your Name here"
            required
          />
          <input
            type="text"
            name="review_country"
            onChange={(event) => setReviewCountry(event.target.value)}
            value={review_country}
            placeholder="Enter Your Country"
            required
          />
          <textarea
            type="text"
            name="review_text"
            onChange={(event) => setReviewText(event.target.value)}
            value={review_text}
            placeholder="Enter Your Comment here"
            required
          />
          <button type="submit">Add Comment</button>
        </form>
      </div>
    </>
  );
};

export default Reviews;
