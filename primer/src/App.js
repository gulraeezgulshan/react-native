import React, { Component } from 'react';

//const message = "This is my first react class"
//const count = 4

/* function isEven() {
  return count % 2 === 0 ? "Even" : "Odd";
} */

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 7
    }
  }

  getClassName(val) {
    return val % 2 === 0
      ? "bg-primary text-white text-center p-2 m-1"
      : "bg-secondary text-white text-center p-2 m-1"
  }

  isEven(val) {
    return val % 2 === 0 ? "Even" : "Odd";
  }

  //count + count +1
  //count ++

  handleClick = () => this.setState({ count: this.state.count + 1 })

  render = () =>
    <h4 className={this.getClassName(this.state.count)}>
      {/* The number is {this.isEven(this.state.count)} */}
      <button className="btn btn-info m-2" onClick={this.handleClick} > Click Me</button>
      {this.isEven(this.state.count)}
    </h4>
}