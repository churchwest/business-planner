import { useState } from 'react';
import './Counter.css';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <button onClick={() => setCount(count - 1)}>-</button>
      <span>Count: {count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
