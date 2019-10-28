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

export default class dashboard extends React.Component {
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
      <div>
      <div>
        <DayPicker onDayClick={this.handleDayClick} />
        {this.state.selectedDay ? (
          <p>You clicked {this.state.selectedDay.toLocaleDateString()}</p>
        ) : (
          <p>Please select a day.</p>
        )}
      </div>
      <Router>
        <div>
        <Link to="/">Home</Link>
        <Switch>
          <Route path="/">
          </Route>
        </Switch>
        </div>
      </Router>
      </div>
    )
  }
}
