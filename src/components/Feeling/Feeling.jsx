import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import {useHistory} from 'react-router-dom';

function Feeling() {
  const dispatch = useDispatch();
  const comments = useSelector((store) => store.feeling)

  let [newFeeling, setNewFeeling] = useState({
    comment: ""
  });

  const addNewFeeling= (event) => {
    setNewFeeling({
      ...newFeeling,
      type: event.target.value,
    });
    goToUnderstanding();
  };

  const history = useHistory();
  const goToUnderstanding = () => {
    console.log('Going to Understanding');
    history.push('/understanding')
  }

  return (
      <div className='App'>
          <input type="number" placeholder="How are you feeling?"></input>
          <button onClick={goToUnderstanding}>NEXT</button>
      
      </div>
  );
};

export default Feeling;