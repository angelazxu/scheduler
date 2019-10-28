import React from 'react';
import dashboard from "./dashboard.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDay: undefined,
    };
  }

  handleDayClick(day) {
    this.setState({ selectedDay: day });
  }

  render() {
  return (
    <Router>
      <div>
        <Link to="/calendar">Calendar</Link>
        <Switch>
          <Route path="/calendar" component={dashboard}>
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
