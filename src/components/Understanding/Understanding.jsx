import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Understanding() {
  const dispatch = useDispatch();
  const comments = useSelector((store) => store.feeling)

  let [newUnderstanding, setNewUnderstanding] = useState({
    comment: ""
  });

  const addNewUnderstanding= (event) => {
    setNewUnderstanding({
      ...newUnderstanding,
      type: event.target.value,
    });
    goToSupport();
  };

  const history = useHistory();
  const goToSupport = () => {
    console.log('Going to Support');
    history.push('/support')
  }

  return (
    <div className="App">
      <input type="number" placeholder="UNDERSTAND"/>
      <button onClick={goToSupport}>NEXT</button>
    </div>
  );
}

export default Understanding;
