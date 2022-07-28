import React from "react";

const CommentForm = () => {
  return (
    <section>
      <form>
        <input
          style={{
            marginTop: "11px",
            padding: "10px",
            height: "200px",
            width: "300px",
            borderColor: "transparent",
            borderBottom: "black",
          }}
          type="text"
          placeholder="Enter your Name here"
          required
        />
        <input  style={{
            marginTop: "11px",
            padding: "10px",
            height: "200px",
            width: "300px",
            borderColor: "transparent",
            borderBottom: "black",
          }}type="Country" placeholder="Enter Your Country" required />
        <textarea  style={{
            marginTop: "11px",
            padding: "10px",
            height: "200px",
            width: "300px",
            borderColor: "transparent",
            borderBottom: "black",
          }}type="text" placeholder="Enter Your Comment here" required />
        <button
          style={{
            paddingBottom: "10px",
            paddingtop: "10px",
            width: "90px",
            height: "46px",
            marginLeft: "0px",
            borderColor: "transparent",
            backgroundColor: "orange",
            color: "white",
            fontSize: "Larger",
          }}
          type="submit"
        >
          Add Comment
        </button>
      </form>
    </section>
  );
};
export default CommentForm;
