import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"],
  };

  handleIncrement = () => {
    this.setState({ count: this.state.value + 1 });
  };

  render() {
    let classes = "btn mx-2 btn-";
    classes += this.state.value == 0 ? "warning" : "primary";

    console.log("props", this.props);

    return (
      <div>
        {/* <img src={this.state.imageUrl} alt="" /> */}

        <span style={this.styles} className={classes}>
          {this.formatCount()}
        </span>

        <button onClick={() => this.handleIncrement()}>Increment</button>

        {/* Rendering dynamic list */}
        {/* {this.renderTags()} */}
      </div>
    );
  }
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;
    else
      return (
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag} </li>
          ))}
        </ul>
      );
  }
  formatCount() {
    return this.state.value === 0 ? "Zero" : this.state.value;
  }
}

export default Counter;
