import React, { useState } from "react";

const CounterButton = React.memo(({ color }) => {
  console.log("CounterButton");
  const [count, setCount] = useState(0);

  return (
    <button color={color} onClick={() => setCount(count => count + 1)}>
      Count: {count}
    </button>
  );
});

export default CounterButton;
