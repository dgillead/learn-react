import React, { Component } from 'react';

class NameChanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }

    this._nameChanged = this._nameChanged.bind(this);
  }

  _nameChanged(e) {
    this.setState({
      name: e.target.value
    })
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this._nameChanged} />
        <h1>Hello my name is {this.state.name}</h1>
      </div>
    )
  }
}

export default NameChanger;
