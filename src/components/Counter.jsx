import { useContext } from "react";
import CounterContext from "../hooks/use-counter";
import Increment from './Increment'
import Decrement from './Decrement'

export default function Counter() {

  const ctx = useContext(CounterContext)

  return (
    <>
      <h1>{ctx.counter}</h1>
      <Increment/>
      <Decrement/>
    </>
  );
}
