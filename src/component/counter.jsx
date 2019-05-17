import React, { Component } from "react";

class Counter extends Component {

state = {
    count : 0,
    imageUrl: "https://picsum.photos/200"
};

styles = {
    fontSize : 10,
    fontWeight : 'bold'
};

formatCount(){
    const { count } = this.state;
    return count === 0 ? <h3>Zero</h3> : count;
};

  render() {
    return (
      <React.Fragment>
        <h6> Your first component! </h6>
        <img src={this.state.imageUrl} alt="" />
        <span /*className = "badge badge-primary m-2"*/ style={this.styles}>{this.formatCount()}</span>
        <button className = "btn btn-secondry btn-sm">Test Button</button>
      </React.Fragment>
    );
  }
}

export default Counter;
