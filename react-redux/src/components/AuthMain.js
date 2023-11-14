import React from 'react';
import AuthApp from './AuthApp';
import AuthState from './AuthState';
import { useSelector } from 'react-redux';
function AuthMain(props) {
    const sel=useSelector(state=>state.auth)
    return (
        <div>
            <AuthApp/>
            <AuthState sel={sel}/>
        </div>
    );
}

export default AuthMain;