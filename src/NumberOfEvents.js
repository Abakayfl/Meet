import React, { Component } from 'react';
// import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {

  state = {
    numberOfEvents: '24',
  };

  // When user changes number value
  handleChange = (event) => {
    const value = event.target.value;
    this.props.updateEvents(null, value);
    if (value < 0 | value >= 101) {
      this.setState({
        infoText: 'Please enter a number between 0 and 100'
      })
    } else {
      return this.setState({
        infoText: '',
        numberOfEvents: value
      })
    }
  };

  render() {
    
    const { numberOfEvents } = this.state;
    
    return (
      <div className="numberOfEvents">
        {/* <p className="error-alert" ><ErrorAlert text={this.state.infoText} /></p> */}
        <label id="numevents-label">Number of events: 
          <br/><br/><br></br>
          <input
            type='number'
            className='number'
            value={numberOfEvents}
            onChange={this.handleChange}
          />
        </label>
      </div>
    );
  }
}

export default NumberOfEvents;