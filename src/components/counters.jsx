import React, { Component } from "react";
import Counter from "./counter";

class Components extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <Counter />
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </div>
    );
  }
}

export default Components;
