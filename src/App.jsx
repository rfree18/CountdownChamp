import React, { Component } from 'react';
import Clock from './Clock.jsx'
import Stopwatch from './Stopwatch.jsx'
import './App.css';
import { Form, FormControl, Button} from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 25, 2017',
      newDeadline: '',
      countdown: 0,
      newCountdown: 0
    }
  }

  changeDeadline() {
    this.setState({deadline: this.state.newDeadline});
  }

  changeCountdown() {
    this.setState({deadline: this.state.deadline, countdown: this.state.newCountdown})
  }

  render() {
    return (
      <div className='App'>
        <div className='App-title'>Countdown to {this.state.deadline}</div>
        <Clock
          deadline={this.state.deadline}
        />
        <Form inline>
          <FormControl
            className='Deadline-input'
            placeholder='new date'
            onChange={event => this.setState({newDeadline: event.target.value})}
          />
          <Button onClick={() => this.changeDeadline()}>Submit</Button>
        </Form>

        {/* Stopwatch */}
        <br></br>
        <div className='App-title'>Stopwatch</div>
        <Stopwatch
          countdown={this.state.countdown}
        />
        <Form inline>
          <FormControl
            className='Stopwatch-input'
            placeholder='Seconds'
            onChange={event => this.setState({newCountdown: event.target.value})}
          />
          <Button onClick={() => this.changeCountdown()}>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default App;
