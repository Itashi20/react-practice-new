import { Component} from "react";


export default class CounterApp extends Component{

    state={
        count:0
    }
    inc=()=>{
        this.setState((prevState)=>{
            return{
                count:prevState.count+1
            }
        })
    }
    increment=()=>{
 
        alert("inc called...!");
    }

    decrement=()=>{
 alert("Dec called");
    }
    // dec=()=>{
    //     this.setState((prevState)=()=>{
    //         return{
    //     count:prevState.count-1
    //         }
    //     })
    // }

    reset=()=>{
 alert("reset called");
    }
    render(){
        return(
            <div>
                <p>the counter is:{this.state.count}</p>
                <button onClick={this.inc}>Increement</button>
                <button onClick={this.dec}>Decreement</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        )
    }
}