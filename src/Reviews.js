// Review Page

import axios from "axios";
import React, { useEffect, useState } from "react";

const Reviews = () => {
  const [reviews, setRevviews] = useState([]);
  const [product_id, setProduct_id] = useState("");
  const [comment, setComment] = useState("");
  const [user_id, setUser_id] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = reviews.length;

  useEffect(() => {
    axios
      .get("http://localhost:9292/reviews")
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
      product_id: product_id,
      user_id: user_id,
      comment: comment,
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

    setProduct_id("");
    setComment("");
    setUser_id("");
  };

  return (
    <>
      <h2 className="review-title">What Our Clients Say</h2>
      <div className="slider">
        {reviews.map((review, index) => {
          //const { review_country, comment, profile_name } = review;
          return (
            <div
              className={index === currentSlide ? "slide current" : "slide"}
              key={review.user.name}
            >
              {index === currentSlide && (
                <div className="content-review">
                  <h2>{review.user.name}</h2>
                  <p className="content-title">{review.comment}</p>
                  <h5>{review.user.location}</h5>
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
            name="product_id"
            onChange={(event) => setProfileName(event.target.value)}
            value={product_id}
            placeholder="Enter your Name here"
            required
          />
          <input
            type="text"
            name="user_id"
            onChange={(event) => setReviewCountry(event.target.value)}
            value={user_id}
            placeholder="Enter Your Country"
            required
          />
          <textarea
            type="text"
            name="comment"
            onChange={(event) => setReviewText(event.target.value)}
            value={comment}
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
