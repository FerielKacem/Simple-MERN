import React , {useState , useEffect} from 'react';
import {useParams, Link} from "react-router-dom";
import axios from 'axios';
import './View.css'
function View() {
const [user , setUser]= useState({})

const {id} =useParams();

useEffect(()=>{
    axios.get(`http://localhost:3001/api/${id}`).then((resp) =>{
      setUser (resp.data)
    })}, [id])


  return (
    

<div style={{marginTop : "150px"}}>
<div className="card">
  <div className="card-header">
<p> User Contact Detail</p>
      </div>
     <div className="container">
     <strong> ID :</strong>
     <span>{id}</span>
<br/>
<br/>
<strong> Name :</strong>
     <span>{user.name}</span>
<br/>
<br/>
<strong> Age :</strong>
     <span>{user.age}</span>
<br/>
<br/>
<strong> UserName :</strong>
     <span>{user.username}</span>
<br/>
<br/>
<Link  to="/" >
<button> GO Back</button>
</Link>

  </div>
</div>

</div>
  


   
  );
}

export default View;