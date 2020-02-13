import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <Navigation />
      <Route path="/" exact component={Home} />
      <Route path="/About" exact component={About} />
      <Route path="/Contact" component={Contact} />
  </div>
);
// test
export default App;
