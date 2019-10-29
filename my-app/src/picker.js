import React from 'react';
import TimeCard from "./TimeCard.js"

export default class Picker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day: this.props.day,
      times: this.props.timesArray,
      stateUpdate: this.props.stateUpdate,
    }

  }

  createDateCards() {
    console.log(this.state.times);
    return this.state.times.map(time =>
      <TimeCard time = {new Date(time)} stateUpdate = {this.props.stateUpdate}/>)
  }


  render() {
    return (
      <div>
      <div class="ui card">
      <div class="content">
          <a class="header">Please pick a time.</a>
          <ul>
          {this.createDateCards()}

          </ul>
        </div>
      </div>
      </div>
    )
  }
}
