import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios"
import {FaUserAlt, FaLock} from 'react-icons/fa'
import Button from 'react-bootstrap/Button';
import CustomInput from './CustomInput'

const Login = ({setIsLogin}) => {

  const navigate = useNavigate()

  const [userForm, setUserForm] = useState({
    email: '',
    password: '',
  })

  const handleUserForm = (e) => {
    setUserForm((prevData) => {
      return {...prevData, [e.target.name]:e.target.value}
    })
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    const resp = await axios.post('http://localhost:8000/login/', userForm)
    localStorage.setItem('user', JSON.stringify(resp.data))
    navigate('users/')
  }

  return (
    <form>
      <CustomInput icon={<FaUserAlt color='rgb(129, 139, 165)' />} name="email" id="email" type="email" value={userForm.email} onChange={handleUserForm} placeholder="username" />
      <CustomInput icon={<FaLock color='rgb(129, 139, 165)' />} name="password" id="password" type="password" value={userForm.password} onChange={handleUserForm} placeholder="password" />
      <Button variant="info" size="lg" style={{width: '100%'}} onClick={handleSubmit}>Login</Button>
      <small onClick={() => setIsLogin(false)} className='text-light d-block text-center mt-1' role='button'>Don't have an account? Click here.</small>
    </form>
  )
}

export default Login