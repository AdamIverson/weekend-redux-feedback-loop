import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Comments() {
  const dispatch = useDispatch();

  let [newComment, setNewComment] = useState({
    comment: "",
  });

  const history = useHistory();

  const handleNewComment = (event) => {
    setNewComment({
      ...newComment,
      comment: event.target.value,
    });
  };

  const addNewComment = (event) => {
    console.log("new comment dispatch", newComment);
    dispatch({
      type: "COMMENT",
      payload: newComment,
    });
    history.push("/review");
  };

  return (
    <div className="App">
      <form onSubmit={(event) => addNewComment(event)}>
        {/* lookit that friggin textarea */}
        <textarea
          onChange={handleNewComment}
          rows="10"
          cols="50"
          type="text"
          placeholder="comments"
        />
        <button type="button" onClick={addNewComment}>
          NEXT
        </button>
      </form>
    </div>
  );
}

export default Comments;
