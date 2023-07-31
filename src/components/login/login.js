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
        history("/cam");
      })
       .catch(err => console.log(err));
    // }
    };
    return (
      <div className='maincontainer'>
      <div className='d-flex justify-content-center align-items-center  vh-100' >
          <div className='bg-white p-3 rounded w-25'>
          <h2><strong> Login</strong></h2>
            <form action='' onSubmit={submitHandler}>
              <div className='mb-3'>
                  <label htmlFor='username'><strong>Username</strong></label>
                  <input type="text"  className='form-control rounded0' name='username' placeholder='Enter username' value={username} onChange={changeHandler} />
                  {errors.username && <span className='text-danger'>{errors.username}</span>}
              </div>
              <div className='mb-3'>
                 <label htmlFor='password'><strong>Password</strong></label>
                 <input type="password" placeholder='Enter password' className='form-control rounded0' name='password' value={password} onChange={changeHandler}/>
                 {errors.password && <span className='text-danger'>{errors.password}</span>}
              </div>
                <button type='submit' className='btn btn-success w-100 rounded-0' onSubmit={submitHandler}><strong>Login</strong></button>
                <p>create account if you are a new user</p>
                <Link to='/createaccount' className='btn btn-default border w-100 bg-light rounded-0'><strong>createaccount</strong></Link>
            </form>
            </div>
      </div>
      </div>
    )
  }
export default Login