import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
function AddUser (props){

    addUser=(e)=>{
        e.preventDefault();
       
        const data=e.target.elements.uname.value
       // alert("user is added...."+data)
       alert(data)
      //this.props.au(data)
      props.au(data)
    }
   
        return(
            <div>
                <form onSubmit={addUser}>
                   {/* UserName:<input type="text" name="uname"/>*/}
                   <TextField id="outlined-basic" label="Outlined" variant="outlined" name="uname" />

             <Button variant="contained">ADD USER</Button>
             </form>
            </div>
        )
    
}

export default AddUser