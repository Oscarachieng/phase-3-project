// Review Page

import React from "react";
import Comments from "./Comments";
import CommentForm from "./CommentForm";

const Reviews = () => {
  return (
    <section className="reviews">
      <Comments />
     <div>
     <CommentForm />
     </div>
    </section>
  );
};
export default Reviews;
