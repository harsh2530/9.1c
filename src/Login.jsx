import React, { useState } from 'react'
import Input from '../Input'
import { Link, useNavigate } from 'react-router-dom'
// import './Login.css'
import { signinAuthUserWithEmailAndPassword } from '../firebase'


const Login = (props) => {


    const [contact, setContact] = useState({
        email: '',
        password: ''
    })

    const { email, password } = contact
    const navigate = useNavigate()



    const handleChange = (event) => {
        const { name, value } = event.target
        setContact((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await signinAuthUserWithEmailAndPassword(email, password);
            navigate('/SignOut')
            alert('Success! You have logged in')

        }
        catch (error) {
            alert('login failed. Incorrect email or password')

        }
    }



    return <div className='center'>
        <Link className='signup' to='/signup'>
            Sign up instead
        </Link>


        <h1>Your email</h1>
        <Input
            name='email'
            type='text'
            placeholder='Email'
            onChange={handleChange}
            value={contact.email}
        />

        <br></br>

        <h1>Your password</h1>
        <Input
            name='password'
            type='password'
            placeholder='Password'
            onChange={handleChange}
            value={contact.password}
        />

        <br></br>

        <button className='button' onClick={handleSubmit}>
            Sign in
        </button>
        <br></br>
    </div>

}
export default Login