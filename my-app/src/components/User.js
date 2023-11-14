import {Component} from 'react'
import Button from '@mui/material/Button';

function User (props){
 
        return(
            <div>
   {props.ud}
   <Button variant="contained"  onClick={()=>props.del(props.ud)}>DELETE</Button>
            </div>
        )
    }

    export default User;
