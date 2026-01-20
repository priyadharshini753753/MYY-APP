import { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(0);      // seconds
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let intervalId: number | undefined;

    if (running) {
      intervalId = window.setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }

    // cleanup
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [running]);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Hook Based Timer</h2>

      <h1>{time} sec</h1>

      <button onClick={() => setRunning(true)}>Start</button>
      <button onClick={() => setRunning(false)} style={{ marginLeft: "10px" }}>
        Pause
      </button>
      <button
        onClick={() => {
          setRunning(false);
          setTime(0);
        }}
        style={{ marginLeft: "10px" }}
      >
        Reset
      </button>
    </div>
  );
}

export default App;

