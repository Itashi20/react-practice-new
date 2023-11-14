import {Component} from 'react'
import User from './User'
import Button from '@mui/material/Button';
function Users (props){
    
        return(
            <div>
               
                {props.userData.map
                ((userd)=><User key={userd} ud={userd} del={props.di} />)}
      { /* <button disabled={!this.props.dl}
         onClick={this.props.da}>DeleteAll</button>*/}


<Button variant="contained" disabled={!props.dl}
         onClick={props.da}>DELETE ALL</Button>
            </div>
        )
    }
export default Users;