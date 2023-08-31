import React, { Component } from "react";

class ClassComponents extends Component {
  constructor() {
    super();
    this.state = {
      contador: 0,
    };
  }

  render() {
    return (
      <div>
        <h1>Class Componets</h1>
        <p>
          <button
            onClick={() => this.setState({ contador: this.state.contador - 1 })}
          >
            -
          </button>
          {this.state.contador}
          <button
            onClick={() => this.setState({ contador: this.state.contador + 1 })}
          >
            +
          </button>
        </p>
      </div>
    );
  }
}
export default ClassComponents;
