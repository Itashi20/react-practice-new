import React from 'react';

function AuthState(props) {
    return (
        <div>
              <p>Auth App....</p>
            Login here to get dicount
            {props.sel?(
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
        </div>
    );
}

export default AuthState;