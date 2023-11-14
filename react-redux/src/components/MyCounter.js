import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { inc,dec,res } from '../actions/counterAction';
import CounterApp from './CounterApp';
import CounterState from './CounterState';
//useSeletor is used to fetch the sttae 
// function MyCounter(props) {
//         const count=useSelector(state=>state.counter)
//         const dispatch=useDispatch(state=>state.counter)
//         return (
//         <div>
//             <p>The Initial State is:{count}</p>
//             <button onClick={()=>dispatch(inc())}>increement</button>
//             <button onClick={()=>dispatch(dec())}>decrement</button>
//             <button onClick={()=>dispatch(res())}>RESET</button>
//         </div>
//     );
// }

function MyCounter(props){
        const count=useSelector(state=>state.counter);

        return (
            <div>
                <CounterState count={count}/>
                <CounterApp/>
            </div>
        );
}

export default MyCounter;