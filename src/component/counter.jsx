import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"]
  };

  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };

//   constructor() {
//     super();
//     this.handleIncrement = this.handleIncrement.bind(this);
//   }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h3>Zero</h3> : count;
  };

  newMethodBoot() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>Add some Tags</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  };

  handleIncrement = product => {
    //console.log("Increment Clicked", this);
    console.log(product);
    this.setState({count: this.state.count + 1 });
  };

  doHandleEvent = () => {
      this.handleIncrement({id:1});
  };

  render() {
    return (
      <React.Fragment>
        <h6> Your first component! </h6>
        <img src={this.state.imageUrl} alt="" />
        <span className={this.newMethodBoot()} /*style={this.styles}*/>
          {this.formatCount()}
        </span>
        <button
          className="btn btn-secondry btn-sm"
          onClick={this.doHandleEvent}
        >
          Increment
        </button>
        <div>{this.renderTags()}</div>
      </React.Fragment>
    );
  }
}

export default Counter;
