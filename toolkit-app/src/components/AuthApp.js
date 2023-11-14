import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { login,logout} from "../redux/login";
function AuthApp(props) {

    const sel=useSelector(state=>state.alogin.token)
    const dispatch=useDispatch()
    return (
        <div>
         <p>Auth App....</p>
            Login here to get dicount
            {sel?(
                <div>
               <p>Congratulations.....you got 50%boff use UYP778 to 
                coupon
               </p>
                    </div>
            ):(
                <p>Not an authorized user....!</p>
            )}
            <div>
                <p></p>
            </div> 
            <button onClick={()=>dispatch(login())}>Login</button>
       
            <button onClick={()=>dispatch(logout())}>Logout</button>

        </div>
    );
}

export default AuthApp;