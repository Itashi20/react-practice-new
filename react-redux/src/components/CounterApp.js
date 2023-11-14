import React from "react";
import { inc, dec, res } from "../actions/counterAction";
import { useDispatch, useSelector } from 'react-redux';
function CounterApp(props) {
    const count=useSelector(state=>state.counter)
    const dispatch=useDispatch(state=>state.counter)
  return (
    <div>
     {/*<p>The Initial State is:{count}</p>*/}
      <button onClick={() => dispatch(inc())}>increement</button>
      <button onClick={() => dispatch(dec())}>decrement</button>
      <button onClick={() => dispatch(res())}>RESET</button>
    </div>
  );
}

export default CounterApp;

