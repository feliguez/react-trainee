import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Blog from './views/Blog/Blog';
import Post from './components/Post/Post';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Blog} />
        <Route path="/posts/:id" component={Post} />
      </div>
    </Router>
  );
}

export default App;
