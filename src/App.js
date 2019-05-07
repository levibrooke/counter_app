import React, { Fragment, Component } from 'react';


// Counter Component
class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  handleIncrement = e => {
    e.preventDefault();
    let count = this.state.count;
    this.setState({ count: count + 1 });
  }

  handleDecrement = e => {
    e.preventDefault();
    let count = this.state.count;
    this.setState({ count: count - 1 });
  }

  render() {
    return (
      <div>
        <p>Number of clicks: {this.state.count}</p>
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
      </div>
    );
  }
}

// App Component
function App() {
  return (
    <Fragment>
      <Counter />
    </Fragment>
  );
}

export default App;
