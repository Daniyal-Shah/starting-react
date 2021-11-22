import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"],
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    let classes = "btn mx-2 btn-";
    classes += this.state.value == 0 ? "warning" : "primary";

    // console.log("props", this.props);

    return (
      <div>
        {/* <img src={this.state.imageUrl} alt="" /> */}

        <span style={this.styles} className={classes}>
          {this.formatCount()}
        </span>

        <button
          className="btn btn-info btn-sm m-2"
          onClick={() => this.handleIncrement()}
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
    return this.state.value === 0 ? "Zero" : this.state.value;
  }
}

export default Counter;
