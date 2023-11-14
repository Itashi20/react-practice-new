import {Component} from 'react'

import Footer from './Footer'
import Head from './Head'
import Users from './Users'
import AddUser from './AddUser';


export default class MainApp extends Component{

    componentDidMount(){
       // console.log('component is loaded');
       const json=localStorage.getItem('slusers')
       const userdata=JSON.parse(json)
       if(userdata){
        this.setState(()=>({userdata}))
       }
    }

    componentDidUpdate(){
      //  console.log('updated');
        const json=JSON.stringify(this.state.userdata)
         localStorage.setItem('slusers',json)
    }
    state={
        headerData:"welcome to header App",
        footerData:"welcome to footer",
        userdata:[]
    }


    deleteAll=()=>{
        this.setState(()=>{
            return{
            userdata:[]}
        })
    }

    //deleting single user
    //() round bracker==return
     delete=(user)=>{
        this.setState((prevState)=>{
            return{
                userdata:prevState.userdata.filter((option)=>user!==option)
            }
        })
    }
    addUser=(data)=>{
   this.setState((prevState)=>{
    return{
        userdata:prevState.userdata.concat(data)
    }
   })
    }
    render(){

        // const headerData="welcome to header App";
        // const footerData="welcome to footer";
        // const userdata=['admin','manager','QA']

        
        return(
            <div>

               <Head hd={this.state.headerData}/>
                <h2>mainApp works...</h2>
                <Users userData={this.state.userdata}
                 da={this.deleteAll}
                 dl={this.state.userdata.length>0}
                 di={this.delete}
                />
                <AddUser au={this.addUser}
               
                />
                <Footer fd={this.state.footerData}/>
                


            </div>
        )
    }
}