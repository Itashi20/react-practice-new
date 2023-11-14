import React,{createContext,useContext,useState} from 'react';


const empContext=createContext()

function ContextApp(props) {
    const [employee]=useState({id:101,empname:'Itashi',city:'mumbai',salary:12345})
    return (
        <div>
<empContext.Provider value={employee}>
<Employee/>
</empContext.Provider>
           
        </div>
    );
}

function Employee(props){
    const empCon=useContext(empContext)
    return(
        <div>
            <p>username:{empCon.empname}</p>
            <Salary/>
        </div>
    )
}


function Salary(props){
    return(
        <div>
            <p>Salary</p>
        </div>
    )
}
export default ContextApp;