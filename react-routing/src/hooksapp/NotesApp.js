import React,{useState,useEffect} from 'react';
function NotesApp(props) {
    //initilise as an array
    //const[users,setUsers]=useState(['admin','manager','QA'])
    
    const[users,setUsers]=useState([])

    const[title,settitle]=useState('')
    const [email,setEmail]=useState('')
   


    useEffect(()=>{
        localStorage.setItem('notes',JSON.stringify(users))
    },[users])
    const addUser=(e)=>{
        e.preventDefault();
       setUsers([
        ...users,{title,email}
       ])
    }

    useEffect(()=>{
        JSON.parse(localStorage.getItem('users'))
    },[])

    const handleDelete=(key)=>{
      setUsers(users.filter((u,k)=>k!==key))
    }

    const handleAllDelete=()=>{
        setUsers([])
    }
    //{(title:'abc',)}
    return (
        <div>
          {/* <p> 
           const res=users.map((user)=>
            console.log(user)
           )
             </p> */}

             <p>Users Data</p>
             {
                users.map((udata,key)=>(
                    <div>
                    <p>{udata.title}</p>
                    <p>{udata.email}</p>
                    <button onClick={()=>handleDelete(key)}>DELETE</button>
                     </div>
                     
                
                ))
             }
             <div>
                <form onSubmit={addUser}>
                userName:<input type='text'
                onChange={(e)=>settitle(e.target.value)}
                value={title}

                />
                email:<input type='text' onChange={(e)=>setEmail(e.target.value)} 
                value={email}  />

                <button>Add User</button>
                <button onClick={handleAllDelete}>Delete All</button>
                </form>
             </div>
        </div>
    );
}

export default NotesApp;