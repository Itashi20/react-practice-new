import React from 'react';
import{ BrowserRouter,Route, Routes} from 'react-router-dom'
import UserDetails from './UserDetails'
import Register from './Register'
import Login from './Login'
import Portfolio from './Portfolio'
import PageNotFound from './PageNotFound'
import Header from './Header'
function RoutePage(props) {
    return (
        <div>
             <BrowserRouter>
    <Header/>
   
   {
    /*
<switch>
<Route path="/" component={Login} exact={true}/>
    */
   }
        <Routes>
<Route exact={true} path="/" element={<Login/> }/>
{/*<Route path="/register" component={Register}/>*/}
<Route exact path="/register" element={<Register/>}/>
<Route exact path="/userdetails" element={<UserDetails/>}/>
<Route exact path="/portfolio" element={<Portfolio/>}/>
<Route  element={<PageNotFound/>}/>
        </Routes>
       
    </BrowserRouter>
        </div>
    );
}

export default RoutePage;