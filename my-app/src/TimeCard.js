import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default class TimeCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: this.props.time,

    }
  }


render() {
  return(
    <div class="card">
    <div class="content">
        <a class="header">{this.props.time.toLocaleTimeString()}</a>
        <Link to="/confirm"><button class="ui basic green button" onClick={() => {this.props.stateUpdate(this.props.time)}}>Confirm Time
        </button></Link>
      </div>
    </div>
  )
}
}
