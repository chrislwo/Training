import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Hello = () => <h2>Hello World from HSBC </h2>

const Image1 = (props) => {
  let { src1, title } = props;
  src1 = src1 || 'https://www.w3schools.com/html/pic_trulli.jpg';
  title = title || "training Demo1";
  return (
    <img src={src1} alt={title} title={title} width="500" height="333" />
  )
}

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        Seconds: {this.state.seconds}
      </div>
    );
  }
}

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React from Chris</h1>
        </header>
        <div>
          <Timer />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <img src="https://www.w3schools.com/html/pic_trulli.jpg" alt="Trulli" width="500" height="333" title="1234"></img>
        <Hello />
        <Image1 />
        <br />
        <Image1 src1="https://www.w3schools.com/html/img_girl.jpg" title="test 2"/>
        <div><Image1 src1="https://www.w3schools.com/html/img_chania.jpg" title="test 3"/></div>
      </div>

    );
  }
}
``
export default App;
