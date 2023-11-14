

function UserData (props){
    
    return(
        <div>
        <h2>UserData</h2>
        {props.ud.map((dt)=>(
            <div key={dt.uid}>
                <p>{dt.uname}</p>
                 </div>
        ))
    }</div>
    )
}
export default UserData