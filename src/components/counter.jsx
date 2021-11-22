import React, { Component } from "react";

class Counter extends Component {
  render() {
    let classes = "btn mx-2 btn-";
    classes += this.props.counter.value == 0 ? "warning" : "primary";

    return (
      <div>
        <span className={classes}>{this.formatCount()}</span>

        <button
          className="btn btn-info btn-sm m-2"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  formatCount() {
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  }
}

export default Counter;
