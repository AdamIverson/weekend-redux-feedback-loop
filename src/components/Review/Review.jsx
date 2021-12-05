import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Review() {
  console.log("inside Review");
  const dispatch = useDispatch();
  const feeling = useSelector((store) => store.feelingReducer);
  const understanding = useSelector((store) => store.understandingReducer);
  const support = useSelector((store) => store.supportReducer);
  const comments = useSelector((store) => store.commentsReducer);

  const history = useHistory();
  const goToSuccess = () => {
    console.log("Going to Success");
    history.push("/success");
  };

  const handleFeedback = () => {
    console.log("inside handleFeedback");

    axios({
      method: "POST",
      url: "/feedback",
      data: {
        feeling: `${feeling.feeling}`,
        understanding: `${understanding.understanding}`,
        support: `${support.support}`,
        comments: `${comments.comment}`,
      },
    })
      .then((response) => {
        console.log("feedback details", response);
        goToSuccess();
      })
      .catch((error) => {
        console.log("console");
      });
  };
  return (
    <div className="App">
      <h2>Please review your responses</h2>

      <table>
        <thead>
          <tr>
            <th>Feeling</th>
            <th>Understanding</th>
            <th>Support</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{feeling.feeling}</td>
            <td>{understanding.understanding}</td>
            <td>{support.support}</td>
            <td>{comments.comment}</td>
          </tr>
        </tbody>
      </table>

      <button type="button" onClick={handleFeedback}>
        NEXT
      </button>
    </div>
  );
}

export default Review;
