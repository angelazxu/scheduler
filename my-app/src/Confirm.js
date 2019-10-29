import React from 'react';

export default class Confirm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day: this.props.day,
      stateUpdate: this.props.stateUpdate,
      date: new Date(this.props.day).toLocaleTimeString(),
    }

  }


    render() {
      return (
        <div>
        <p>{this.state.date}</p></div>
      )
    }
  }
