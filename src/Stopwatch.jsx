import React, { Component } from 'react';
import './App.css';

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countdown: this.props.countdown,
      elapsed: 0
    }
  }

  componentWillMount() {
    this.updateTime(this.props.countdown);
  }

  componentDidMount() {
    setInterval(() => this.updateTime(this.props.countdown), 1000);
  }

  updateTime(countdown) {
    if(this.state.countdown !== this.props.countdown) {
      this.setState({countdown: this.props.countdown, elapsed: 0});
    }

    const time = countdown - this.state.elapsed;

    if(time > 0) {
      this.setState({elapsed: this.state.elapsed + 1});
      if(time === 1) {
        alert('Stopwatch complete!');
      }
    }
  }

  render() {
    const time = this.props.countdown - this.state.elapsed;
    return(
      <div className="Stopwatch-seconds">{time} Seconds</div>
    )
  }
}

export default Stopwatch
