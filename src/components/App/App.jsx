import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import Comments from '../Comments/Comments';
import Feeling from '../Feeling/Feeling';
import Review from '../Review/Review'
import Success from '../Success/Success';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';

function App() {
  const dispatch = useDispatch();
  // I strongly considered consolidating newFeedback here as one piece of state
  // I already started down this path of many Reducers, though, so I'll see it through
  // I can always refactor later, for now I'll take the reps
  
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <Router>
        <Route exact path="/">
          <Feeling />
        </Route>
        <Route exact path='/understanding'>
          <Understanding />
        </Route>
        <Route exact path="/support">
          <Support />
        </Route>
        <Route exact path="/comments">
          <Comments />
        </Route>
         <Route exact path="/review">
           <Review />
         </Route>
         <Route exact path="/success">
           <Success />
         </Route>
      </Router>
    </div>
  );
}

export default App;
