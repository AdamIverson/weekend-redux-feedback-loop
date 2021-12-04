import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import {useHistory} from 'react-router-dom';

function Support() {
  const dispatch = useDispatch();
  const comments = useSelector((store) => store.feeling)

  let [newSupport, setNewSupport] = useState({
    comment: ""
  });

  const addNewSupport= (event) => {
    setNewSupport({
      ...newSupport,
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
         <input type="number" placeholder="SUPPORT"/>
        <button onClick={addNewSupport}>NEXT</button>
      </div>
  );
};

export default Support;