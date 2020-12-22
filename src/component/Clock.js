import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // hour: new Date().getHours(),
      // minutes: new Date().getMinutes(),
      // seconds: new Date().getSeconds(),
      time: new Date().toLocaleTimeString('it-IT'),
      greeting: "What time is it?",
    };
  }

  updateTime = () => {
    setInterval(() => {
      this.setState({
        // hour: new Date().getHours(),
        // minutes: new Date().getMinutes(),
        // seconds: new Date().getSeconds(),
        time: new Date().toLocaleTimeString('it-IT')
      });
    }, 1000);
  };

  render() {
    return (
      <div>
        <h1>{this.state.greeting}</h1>
        <p>
          {this.updateTime()}
          {this.state.time}
          {/* {this.state.hour}:{this.state.minutes}:
          {this.state.seconds < 10
            ? "0" + this.state.seconds
            : this.state.seconds} */}
        </p>
      </div>
    );
  }
}

export { Clock };
