import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Posts from './pages/Posts';
import CreatePost from './pages/CreatePost';
import Navbar from './components/Navbar';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Switch>
          <Route path='/create'>
            <CreatePost />
          </Route>

          <Route path='/'>
            <Posts />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
