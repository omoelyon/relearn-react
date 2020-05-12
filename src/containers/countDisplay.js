import React, { Component } from "react";
import CountDown from "./../components/CountDown/CountDown";

class countDisplay extends Component {
  state = {
    setDate: {
      year: 2021,
      month: 10,
      day: 25,
    },
    date: new Date().getTime(),
    factors: {
      weeks: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    },
  };

  recount = () => {
    const eventDate = { ...this.state.setDate };
    const factor = { ...this.state.factors };
    let eventTime = new Date(
      eventDate.year,
      eventDate.month,
      eventDate.day,
      0,
      0,
      0
    ).getTime();
    let remTime = (eventTime - this.state.date) / 1000;
    for (let i = 5; i >= 1; i--) {
      switch (i) {
        case 5:
          factor.weeks = Math.floor(remTime / (7 * 24 * 60 * 60));
          remTime = Math.round(remTime % (7 * 24 * 60 * 60));
          break;
        case 4:
          factor.days = Math.floor(remTime / (24 * 60 * 60));
          remTime = Math.round(remTime % (24 * 60 * 60));
          break;
        case 3:
          factor.hours = Math.floor(remTime / (60 * 60));
          remTime = Math.round(remTime % (60 * 60));
          break;
        case 2:
          factor.minutes = Math.floor(remTime / 60);
          remTime = Math.round(remTime % 60);
          break;
        case 1:
          factor.seconds = Math.floor(remTime);
          break;

        default:
          break;
      }
    }

    this.setState({ factors: factor });
  };
  componentDidMount() {
    setInterval(() => this.recount(), 1000);
  }
  componentWillMount() {
    this.recount();
  }

  render() {
    return (
      <div>
        <CountDown
          weeks={this.state.factors.weeks}
          days={this.state.factors.days}
          hours={this.state.factors.hours}
          minutes={this.state.factors.minutes}
          seconds={this.state.factors.seconds}
        />
      </div>
    );
  }
}
export default countDisplay;
