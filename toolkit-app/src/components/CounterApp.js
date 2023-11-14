import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { increment } from "../redux/counterRedux";
function CounterApp(props) {
    const count=useSelector(state=>state.acounter.counter)
    const dispatch=useDispatch()
  return (
    <div>
     <p>The Initial State is:{count}</p>
      <button onClick={() => dispatch(increment())}>increement</button>
     
    </div>
  );
}

export default CounterApp;

