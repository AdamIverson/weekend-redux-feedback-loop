import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Success() {
  const history = useHistory();
  const startOver = () => {
    console.log("Going to Review");
    history.push("/");
  };

  return (
    <div className="App">
      <h2>Thank you!</h2>
      <button onClick={startOver}>Leave New Feedback!</button>
    </div>
  );
}

export default Success;
