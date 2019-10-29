import React from 'react';
import Dashboard from "./dashboard.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Confirm from "./Confirm.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.stateUpdate = this.stateUpdate.bind(this);
    this.setState = this.setState.bind(this);
    this.state = {
      selectedDay: undefined,
    };
  }

  handleDayClick(day) {
    this.setState({ selectedDay: day });
  }

  stateUpdate(day) {
    this.setState({selectedDay: day});
  }

  render() {
  return (
    <Router>
      <div>
        <Link to="/calendar">Calendar</Link>
        <Switch>
          <Route path="/calendar">
          <Dashboard stateUpdate = {this.stateUpdate}/>
          </Route>
          <Route path="/confirm">
          <Confirm day = {this.state.selectedDay} stateUpdate = {this.stateUpdate}></Confirm>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
}

function Calendar() {
  return <h2>Calendar</h2>;
}
