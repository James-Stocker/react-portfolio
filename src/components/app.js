import React, { Component } from 'react';
import moment from "moment"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>James Stocker</h1>
        <h2>Portfolio</h2>
        <div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
      </div>
    );
  }
}
