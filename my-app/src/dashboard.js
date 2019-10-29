import React from 'react';
import DayPicker from 'react-day-picker';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import 'react-day-picker/lib/style.css';
import Picker from "./picker.js";

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDay: undefined,
      stateUpdate: this.props.stateUpdate,
    };
  }

  handleDayClick(day) {
    this.setState({ selectedDay: day });
  }

  createTimeArray() {
    let temp = [];
    let start = this.state.selectedDay.getTime();
    var x;
    for (x = 0; x<10; x++) {
      temp.push(start + 1800000*x);
    }
    return <Picker day = {this.state.selectedDay} timesArray = {temp} stateUpdate = {this.props.stateUpdate}/>

  }

  render() {
    return (
      <div>
        <DayPicker onDayClick={this.handleDayClick} />
        {this.state.selectedDay ? (
          <div>

          <p>You clicked {this.state.selectedDay.toLocaleDateString()}</p>
          {this.createTimeArray()}

          </div>

        ) : (
          <p>Please select a day.</p>
        )}
      </div>
    )
  }
}
