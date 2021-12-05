import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Support() {
  const dispatch = useDispatch();

  let [newSupport, setNewSupport] = useState({
    support: 0,
  });

  const history = useHistory();
  const goToComments = () => {
    console.log("Going to Comments");
    history.push("/comments");
  };

  const handleNewSupport = (event) => {
    setNewSupport({
      ...newSupport,
      support: event.target.value,
    });
  };

  const addNewSupport = (event) => {
    console.log("new feeling dispatch", newSupport);
    dispatch({
      type: "SUPPORT",
      payload: newSupport,
    });
    goToComments();
  };

  return (
    <div className="App">
      <h2>How well do you feel that you are being supported?</h2>
      <form onSubmit={(event) => addNewSupport(event)}>
        <input
          onChange={handleNewSupport}
          type="number"
          placeholder="support"
        />
        <button type="button" onClick={addNewSupport}>
          NEXT
        </button>
      </form>
    </div>
  );
}

export default Support;
