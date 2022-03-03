import react , {useState , useEffect} from 'react';
import { useParams , Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom";
import './Add.css';
import axios from 'axios';
import {toast} from 'react-toastify'

const intialState = {
    name : "",
    age: "",
   username : ""}


const Update =() => {

const [State , setState] =useState(intialState);

const {name, age , username }= State;

const handelChangeInput =(e)=>{
      const {name,value} = e.target;
      setState({...State,[name]: value})
    }

    const location =  useLocation();
    console.log(location); 
    const _path = location.pathname.split("/")[2]
    console.log(_path)

useEffect(()=>{
axios.get("http://localhost:3001/api/"+ _path).then((resp) =>{
  setState (resp.data)
  console.log("this is data ", State)
})}, [_path])



const navigate = useNavigate();
  function handleClick() {
    navigate('/')
  }






 const handelsubmit = async (e)=>{
     e.preventDefault();
     if(!name|| !age ||!username ){
     toast.error("Please provide value into each input field")}
     
    else{
      await  axios.put("http://localhost:3001/api/" + _path ,{
      name ,
      age,
     username 
  }).then (()=>{
   setState({name : "", age:"",username : ""})

  }).catch((err)=>{toast.error(err.response.data)});
  toast.success("Contact Update Succesfully")
  setTimeout(()=>handleClick(),500)

    }}
      


  return (
    
<div>
    
    <form >
    <label htmlFor="name"> Name</label>
    <input type="text" id = "name" value={name ||""}  name ="name" onChange = {handelChangeInput} placeholder="Your name.."/>

    <label htmlFor="lname">Age</label>
    <input type="number" id = "age" value={age ||""} name="age" onChange = {handelChangeInput} placeholder="Your age.."/>

    <label htmlFor="lname">Username</label>
    <input type="text" id = "username" value={username ||""} name="username" onChange = {handelChangeInput} placeholder="Your username.."/>

   
  
    <input type="submit" onClick={ handelsubmit} value="Update" />

    <Link to="/">
    <input type="button" value="Go Back ..."/>
    </Link>
  </form>
  
  </div>
  


   
  )
}

export default  Update;