import React, { Component } from 'react'

export default class Student1 extends Component {
  render() {
    return (
      <div>
        <p>Name: {this.props.name}</p>
        <p>Address: {this.props.address}</p>
        <p>Score: {this.props.score}</p>
      </div>
    );
  }
}
