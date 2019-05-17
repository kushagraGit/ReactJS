import React, { Component } from "react";

class Counter extends Component {

state = {
    count : 0
};

  render() {
    return (
      <React.Fragment>
        <h6> Your first component! </h6>
        <span>{this.state.count}</span>
        <button>Test Button</button>
      </React.Fragment>
    );
  }
}

export default Counter;
