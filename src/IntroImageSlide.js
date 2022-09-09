import React, { useState, useEffect } from "react";

const IntroImageSlide = ({ products }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = products.length;

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

  return (
    <div className="slider">
      {products.map((product, index) => {
        const { id, image_url, title, price } = product;
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={id}
          >
            {index === currentSlide && (
              <div>
                <img src={image_url} alt="slide" className="image" />
                <div className="content">
                  <h2>{title}</h2>
                  <p className="content-title">$ {price}</p>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default IntroImageSlide;
