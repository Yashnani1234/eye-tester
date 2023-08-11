import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { useHistory } from "react-router-dom";
import validation from './loginvalidation'
import axios from 'axios'
import './login.css'
function Login(){

  const [data,setData] = useState({
      username : '',
      password : ''
  })
  const {username,password} = data;
  const changeHandler = e => {
      setData(prev=>({ ...prev,...data,[e.target.name]:[e.target.value]}));
  }
  const history=useHistory();
  const [errors, setErrors]=useState({})
  const submitHandler = e =>{
      e.preventDefault()
      setErrors(validation(data));
      // if (
      //    errors.username === "" &&
      //    errors.password === ""
      // ) {
      axios.post('http://localhost:3306/login',data)
      .then((res) => {
        if(res.data==="success"){
        history("/cam");
        }
        else{
          alert("no record exist");
        }
      })
       .catch(err => console.log(err));
    // }
    };
    return (
      <div className='maincontainer'>
        <h2 className='heading'><strong>OculaScanner</strong></h2>
      <div className='subcontainer'>
        <div className='loginbox' >
              <h2><strong> Login</strong></h2>
              <form action='' onSubmit={submitHandler}>
                <div className='input'>
                  <label htmlFor='username'><strong>Username</strong></label>
                  <input type="text"   name='username' placeholder='Enter username' value={username} onChange={changeHandler} />
                </div>
                  {errors.username && <span className='text-danger'>{errors.username}</span>}
                <div className='input'>
                  <label htmlFor='password'><strong>Password</strong></label>
                  <input type="password" placeholder='Enter password'  name='password' value={password} onChange={changeHandler}/>
                </div>
                  {errors.password && <span className='text-danger'>{errors.password}</span>}
                  <button type='submit' className='loginbutton'  onClick={submitHandler}><strong>Login</strong></button>
                  <p>create account if you are a new user</p>
                   <Link to='/createaccount' ><strong>createaccount</strong></Link> 
              </form>
              </div>
          </div>
      </div>
    )
  }
export default Login