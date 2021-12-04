import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import {useHistory} from 'react-router-dom';

function Review() {
  const dispatch = useDispatch();
  const comments = useSelector((store) => store.comments)

  const history = useHistory();
  const goToSuccess = () => {
    console.log('Going to Success');
    history.push('/success')
  }

  return (
      <div className='App'>
          <button onClick={goToSuccess}>NEXT</button>
      </div>
  );
};

export default Review;