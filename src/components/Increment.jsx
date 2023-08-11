import React, { useContext } from "react";
import CounterContext from "../hooks/use-counter";

export default function Decrement() {
  const ctx = useContext(CounterContext);

  return <button onClick={ctx.increment}>Increment</button>;
}
