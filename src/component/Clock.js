import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: new Date().getHours(),
      minutes: new Date().getMinutes(),
      seconds: new Date().getSeconds(),
      greeting: "What time is it?",
    };
  }

  updateTime = () => {
    setInterval(() => {
      this.setState({
        hour: new Date().getHours(),
        minutes: new Date().getMinutes(),
        seconds: new Date().getSeconds(),
      });
    }, 1000);
  };

  render() {
    return (
      <div>
        <h1>{this.state.greeting}</h1>
        <p>
          {this.updateTime()}
          {this.state.hour}:{this.state.minutes}:
          {this.state.seconds < 10
            ? "0" + this.state.seconds
            : this.state.seconds}
        </p>
      </div>
    );
  }
}

export { Clock };
