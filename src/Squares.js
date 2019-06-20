import React, { Component } from 'react';
import './App.css';

export default class Squares extends Component {
  render() {
    const { ticTacMark, id, arr } = this.props
    return (
      <div onClick={ticTacMark} id={id} className="squares">{arr[id]}</div>
    );
  }
}

