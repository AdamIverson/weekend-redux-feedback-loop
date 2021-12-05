import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import {useHistory} from 'react-router-dom';

function Feeling() {
  const dispatch = useDispatch();
  const feeling = useSelector((store) => store.feeling)

  let [newFeeling, setNewFeeling] = useState({
    feeling: 0,
  });

  const history = useHistory();
  const goToUnderstanding = () => {
    console.log('Going to Understanding');
    history.push('/understanding')
  };

  const handleNewFeeling = (event) => {
    setNewFeeling({
      ...newFeeling,
      feeling: event.target.value,
    });
  };

  const addNewFeeling = (event) => {
    console.log("new feeling dispatch", newFeeling);
    dispatch({
      type: "FEELING",
      payload: newFeeling,
    });
    goToUnderstanding();
  }

  return (
      <div className='App'>
          <h2>How are you feeling?</h2>
          <form onSubmit={(event) => addNewFeeling(event)}>
            <input onChange={handleNewFeeling} type="number" placeholder="How are you feeling?"></input>
            <button type="button" onClick={addNewFeeling}>NEXT</button>
          </form>
      
      </div>
  );
};

export default Feeling;