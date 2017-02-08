import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Webcam from 'react-webcam';
import './index.css';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>foo</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}


ReactDOM.render(<Webcam width='100%' height='100%' />, document.getElementById('root'));

ReactDOM.render(
  <Clock />,
  document.getElementById('clock')
);


