import React from "react";
import DateTitle from "./DateTitle";
import "./App.css";
import "./DateTitle.css";

class App extends React.Component {
  state = {};
  getDateString = () => {
    var date = new Date();
    var month = date.getMonth() + 1;
    var day = date.getDate();

    const datestr =
      "[" +
      month +
      "월 " +
      day +
      "일 코로나-19 자가진단 COVID-19 Self-diagnosis]";

    this.setState({ datestr });
  };

  componentDidMount() {
    this.getDateString();
  }

  render() {
    const { datestr } = this.state;
    return <DateTitle datetitle={datestr} />;
  }
}

export default App;
