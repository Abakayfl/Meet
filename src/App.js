import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import "./nprogress.css";
// import { ErrorAlert } from './Alert';

class App extends Component {

  state = {
    events: [],
    locations: [],
    numberOfEvents: '24',
    currentLocation: "all"
  }

  updateEvents = (location, eventCount) => {
    const { currentLocation, numberOfEvents } = this.state;
    if (location) {
      getEvents().then((events) => {
        const locationEvents =
          location === "all"
            ? events
            : events.filter((event) => event.location === location);
        const filteredEvents = locationEvents.slice(0, numberOfEvents);
        this.setState({
          events: filteredEvents,
          currentLocation: location,
        });
      });
    } else {
      getEvents().then((events) => {
        const locationEvents =
          currentLocation === "all"
            ? events
            : events.filter((event) => event.location === currentLocation);
        const filteredEvents = locationEvents.slice(0, eventCount);
        this.setState({
          events: filteredEvents,
          numberOfEvents: eventCount,
        });
      });
    }
  }

  ifOnline = () => {
    if (!navigator.onLine) {
      this.setState({
        infoText: 'You are currently offline- events may not be up to date'
      })
    } else {
      return this.setState({
        infoText: '',
      })
    }
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
    this.ifOnline();
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <div className="App">
        <div id="header-container">
          <h1 id="header"><span id="devel">WebDev</span><span id="up">for</span><span id="plus">Everybody</span></h1>
          {/* <p className="error-alert-offline" ><ErrorAlert text={this.state.infoText} /></p> */}
        </div>
        <br></br><br></br>
        <p id="subheader">Want to improve your web development skills?<br /><br />Explore upcoming events in <span id="webdev-header">Web Development</span> from around the world!</p>
        <br /><br />
        <label id="city-label">Select your city:
          <br /><br /><br />
          <CitySearch
            locations={this.state.locations}
            updateEvents={this.updateEvents}
          />
        </label>
        <br /><br />
        <NumberOfEvents
          numberOfEvents={this.state.numberOfEvents}
          updateEvents={this.updateEvents}
        />
        <br></br>
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;