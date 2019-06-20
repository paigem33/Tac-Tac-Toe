import React, { Component } from 'react';
import './App.css';
import Board from './Board';
// import Squares from './Squares';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Tic Tac Toe</h1>
        < Board />
     </div>
    );
  }
}

