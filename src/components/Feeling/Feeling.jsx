import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

// oh yeah the feeling component
// feel those feelings bb
function Feeling() {
  const dispatch = useDispatch();
  const feeling = useSelector((store) => store.feeling);

  // set some state to send to redux
  let [newFeeling, setNewFeeling] = useState({
    feeling: 0,
  });

  const history = useHistory();

  // put the input value into state on the event of a form submission
  const handleNewFeeling = (event) => {
    setNewFeeling({
      ...newFeeling,
      feeling: event.target.value,
    });
  };

  const addNewFeeling = (event) => {
    // look at this stack of conditionals
    // the alert won't pop up unless a number is entered then deleted
    // I left the support alert alone to demonastrate an alert
    // that works without having to do some business in the input first
    if (newFeeling.feeling === ""){
      alert('please enter one feeling')
    }
    else if(newFeeling.feeling > 0 && newFeeling.feeling <= 10) {
    dispatch({
      type: "FEELING",
      payload: newFeeling,
    });
    // send to next page
    history.push("/understanding");
  } else if (newFeeling.feeling > 10) {
    alert('so many feelings')
  }
  };
  
  // to be rendered in the DOM:f
      return (
        <div className="App">
          <h2>How are you feeling?</h2>
          {/* this onSubmit is a piece of magic that I copy/pasted.
          I think it means that on the event of a successful submission
          the add newFeeling function will fire, utilizing the data in
          the input field at the time of submission*/}
          <form onSubmit={(event) => addNewFeeling(event)}>
            <input
              onChange={handleNewFeeling}
              type="number"
              placeholder="1-10"
            ></input>
            <button type="button" onClick={addNewFeeling}>
              NEXT
            </button>
          </form>
        </div>
      );
  };


export default Feeling;
