import React,{useState,useEffect} from 'react';

function CounterApp(props) {
    //first is property,second is function which takes care of property and increement it
    const [count,setCount]=useState(10)


//performs fuctionality of componentDid mount and component did update both
    useEffect(()=>{
        console.log("called everytime")
    },[count])


    //count  --parameters so will update as component did update not did mount
    //if we add [] bracket so it will behave as component did mount
    const increement=()=>{
        setCount(count+1);
    }
    const dec=()=>{
        setCount(count-1)
    }
    return (
        <div>
            <p>The count is:{count}</p>
            <button onClick={increement}>+</button>
            <button onClick={()=>setCount(count+1)}>++</button>
            <button onClick={dec}>-</button>
        </div>
    );
}

export default CounterApp;