import React from 'react';
import{Link} from 'react-router-dom'
function Header(props) {
    return (
        <div>
          
        {/*<NavLink to="/" exact={true}>Login</NavLink>*/}
        <Link to="/" exact={true}>Login</Link>&nbsp;
        <Link to="/register" exact={true}>Register</Link>&nbsp;
        <Link to="/userdetails" exact={true}>User Details</Link>&nbsp;
        <Link to="/portfolio" exact={true}>Portfolio</Link>&nbsp;
    
        </div>
    );
}

export default Header;