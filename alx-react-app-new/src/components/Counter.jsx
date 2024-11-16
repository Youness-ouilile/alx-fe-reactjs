import {useState} from 'react'

function Counter() {
    const [count, setCount] = useState(0);
 
    const increment = () => {
        setCount(count + 1);
      };
    
      // Handler to decrement the count
      const decrement = () => {
        setCount(count - 1);
      };
    
      // Handler to reset the count to 0
      const reset = () => {
        setCount(0);
      };
   return ( <div>
    <p>Count: {count}</p>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={reset}>Reset</button>
  </div>);
}

export default Counter