import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCount: 0
    }

    this._addOne = this._addOne.bind(this);
    this._addFive = this._addFive.bind(this);
    this._addTen = this._addTen.bind(this);
  }

  _addOne(e) {
    console.log(this.state.currentCount);
    console.log(e.target.value);
    this.setState({
      currentCount: this.state.currentCount + parseInt(e.target.value, 10)
    })
  }

  _addFive(e) {
    this.setState({
      currentCount: this.state.currentCount + parseInt(e.target.value, 10)
    })
  }

  _addTen(e) {
    this.setState({
      currentCount: this.state.currentCount + parseInt(e.target.value, 10)
    })
  }

  render() {
    return (
      <div>
        <h1>The current count is {this.state.currentCount}</h1>
        <button value={1} onClick={this._addOne}>Add 1</button>
        <button value={5} onClick={this._addFive}>Add 5</button>
        <button value={10} onClick={this._addTen}>Add 10</button>
      </div>
    )
  }
}

export default Counter;
