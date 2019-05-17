import React, { Component } from "react";

class Counter extends Component {

state = {
    count : 0
};

formatCount(){
    const { count } = this.state;
    return count === 0 ? <h3>Zero</h3> : count;
};

  render() {
    return (
      <React.Fragment>
        <h6> Your first component! </h6>
        <span>{this.formatCount()}</span>
        <button>Test Button</button>
      </React.Fragment>
    );
  }
}

export default Counter;
