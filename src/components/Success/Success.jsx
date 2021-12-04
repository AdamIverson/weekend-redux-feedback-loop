import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import {useHistory} from 'react-router-dom';

function Success() {

  const history = useHistory();
  const startOver = () => {
    console.log('Going to Review');
    history.push('/')
  }

  return (
      <div className='App'>
        <button onClick={startOver}>Leave New Feedback!</button>
      </div>
  );
};

export default Success;