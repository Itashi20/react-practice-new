import React from 'react'
import RoutePage from './RoutePage'

function LandingPage(props) {
    return (
        <div>
        <h2>This is Landing Page</h2>
        <p>
           <RoutePage/>
        </p>
        </div>
    )
}

// const routes=(
//     <BrowserRouter>
//     <Header/>
   
//    {
//     /*
// <switch>
// <Route path="/" component={Login} exact={true}/>
//     */
//    }
//         <Routes>
// <Route exact={true} path="/" element={<Login/> }/>
// {/*<Route path="/register" component={Register}/>*/}
// <Route exact path="/register" element={<Register/>}/>
// <Route exact path="/userdetails" element={<UserDetails/>}/>
// <Route exact path="/portfolio" element={<Portfolio/>}/>
// <Route  element={<PageNotFound/>}/>
//         </Routes>
       
//     </BrowserRouter>
// )
export default LandingPage
