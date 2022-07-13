import React from "react";

const BookMark = (props) => {
  return (
    <button
      className="btn btn-outline-dark"
      onClick={() => props.onToggle(props._id)}
    >
      {props.bookmark === false ? (
        <i className="bi bi-bookmark"></i>
      ) : (
        <i className="bi bi-bookmark-fill"></i>
      )}
    </button>
  );
};

export default BookMark;
