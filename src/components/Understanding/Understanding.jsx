import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Understanding() {
  const dispatch = useDispatch();

  let [newUnderstanding, setNewUnderstanding] = useState({
    understanding: 0,
  });

  const history = useHistory();

  const handleNewUnderstanding = (event) => {
    setNewUnderstanding({
      ...newUnderstanding,
      understanding: event.target.value,
    });
  };

  const addNewUnderstanding = (event) => {
    
    if(newUnderstanding.understanding != "") {
    dispatch({
      type: "UNDERSTANDING",
      payload: newUnderstanding,
    });
    history.push("/support");
  } else{ 
    alert('no')
  }
  };

  return (
    <div className="App">
      <h2>How well do you feel that you are understanding the material?</h2>
      <form onSubmit={(event) => addNewUnderstanding(event)}>
        <input
          onChange={handleNewUnderstanding}
          type="number"
          placeholder="understanding"
        />
        <button type="button" onClick={addNewUnderstanding}>
          NEXT
        </button>
      </form>
    </div>
  );
}

export default Understanding;
