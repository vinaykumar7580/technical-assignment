import { useRef, useState } from "react";

function Counter2() {
  const [count, setCount] = useState(0);

  const ref = useRef(null);

  const handleStart = () => {
    if (ref.current != null) {
      return;
    }

    ref.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(ref.current);
    ref.current = null;
  };

  const handleReset = () => {
    handleStop();
    setCount(0);
  };

  return (
    <div>
      <h1>Counter with hook</h1>
      <h3>Count: {count}</h3>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
export default Counter2;
