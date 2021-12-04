import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import {useHistory} from 'react-router-dom';

function Comments() {
  const dispatch = useDispatch();
  const comments = useSelector((store) => store.comments)

  let [newComment, setNewComment] = useState({
    comment: ""
  });

  const addNewComment = (event) => {
    setNewComment({
      ...newComment,
      type: event.target.value,
    });
    goToReview();
  };

  const history = useHistory();
  const goToReview = () => {
    console.log('Going to Review');
    history.push('/review')
  }

  return (
      <div className='App'>
        <form>
          <textarea rows="10" cols="50" type="text" placeholder="comments"/>
          <button onClick={addNewComment}>NEXT</button>
        </form>
      </div>
  );
};

export default Comments;