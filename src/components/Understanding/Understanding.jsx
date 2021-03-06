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
    
    if(newUnderstanding.understanding > 0 && newUnderstanding.understanding <= 10) {
    dispatch({
      type: "UNDERSTANDING",
      payload: newUnderstanding,
    });
    history.push("/support");
  } else if (newUnderstanding.understanding === ""){ 
    alert('please enter one support');
  } else if (newUnderstanding.understanding > 10) {
      alert('too much support there pal')
  }
  };

  return (
    <div className="App">
      <h2>How well do you feel that you are understanding the material?</h2>
      <form onSubmit={(event) => addNewUnderstanding(event)}>
        <input
          onChange={handleNewUnderstanding}
          type="number"
          placeholder="1-10"
        />
        <button type="button" onClick={addNewUnderstanding}>
          NEXT
        </button>
      </form>
    </div>
  );
}

export default Understanding;
