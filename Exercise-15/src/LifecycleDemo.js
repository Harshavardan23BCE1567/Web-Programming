import React from 'react';

class LifecycleDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log('Constructor called');
  }

  componentDidMount() {
    console.log('Component did mount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component did update');
    console.log('Previous state:', prevState);
    console.log('Current state:', this.state);
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  handleClick = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };

  render() {
    console.log('Render called');
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

export default LifecycleDemo;