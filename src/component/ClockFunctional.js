import React, { useState } from "react";

const ClockFunctional = (props) => {
  
  const [time, setTime] = useState(new Date().toLocaleTimeString("it-IT"));
  const [greeting, setGreeting] = useState('What time is it?')

  const updateTime = () => {
    setInterval(() => {
        setTime(new Date().toLocaleTimeString("it-IT"))
    }, 1000);
  };

  return (
      <div>
          <h1>{greeting}</h1>
          {updateTime()}
          <p>{time}</p>          
      </div>
  );
};

export default ClockFunctional;