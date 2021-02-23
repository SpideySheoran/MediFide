import React, { Component } from 'react';
import LoginPage from './components/Page';
import Dashboard from './components/DashboradPage';
import Menu from './components/MenuComponent';

import './App.css';

class App extends Component {
  render(){
    return (
      <div>
          <Dashboard />
      </div>
    ); 
  }
}

export default App;
