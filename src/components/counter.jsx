import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"],
  };
  // styles = {
  //   fontSize: "10px",
  //   fontWeight: "bold",
  // };
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  handleIncrement = (product) => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    let classes = "btn mx-2 btn-";
    classes += this.state.count == 0 ? "warning" : "primary";

    return (
      <React.Fragment>
        {/* <img src={this.state.imageUrl} alt="" /> */}

        <span style={this.styles} className={classes}>
          {this.formatCount()}
        </span>

        <button onClick={() => this.handleIncrement(product)}>Increment</button>

        {/* Rendering dynamic list */}
        {this.renderTags()}
      </React.Fragment>
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
    return this.state.count === 0 ? "Zero" : this.state.count;
  }
}

export default Counter;
