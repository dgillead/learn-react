import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCount: 0
    }
  }

  render() {
    return (
      <div>
        <h1>The current count is {this.state.currentCount}</h1>
      </div>
    )
  }
}

export default Counter;
