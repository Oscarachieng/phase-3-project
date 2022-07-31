import React from "react";

const CommentForm = () => {
  return (
    <section className="comment-form">
      <form >
        <input
          
          type="text"
          placeholder="Enter your Name here"
          required
        />
        <input
         
          type="Country"
          placeholder="Enter Your Country"
          required
        />
        <textarea
         
          type="text"
          placeholder="Enter Your Comment here"
          required
        />
        <button
          type="submit"
        >
          Add Comment
        </button>
      </form>
    </section>
  );
};
export default CommentForm;
