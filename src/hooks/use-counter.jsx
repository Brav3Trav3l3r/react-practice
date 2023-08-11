import { createContext, useState } from "react";

const CounterContext = createContext({
  counter: 0,
  increment: () => {},
  decrement: () => {},
});

export const CounterProvider = (props) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <CounterContext.Provider
      value={{
        counter: count,
        increment: increment,
        decrement: decrement,
      }}
    >
      {props.children}
    </CounterContext.Provider>
  );
};

export default CounterContext;
