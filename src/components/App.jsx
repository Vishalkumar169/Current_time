import React, { useState } from "react";

function App() {
  let t = new Date().toLocaleTimeString();

  const [time, updatedTime] = useState(t);

  setInterval(setTime, 1000);

  function setTime() {
    let newtime = new Date().toLocaleTimeString();
    updatedTime(newtime);
  }

  // setInterval(setTime, 1000);
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={setTime}>Get Time</button>
    </div>
  );
}

export default App;
