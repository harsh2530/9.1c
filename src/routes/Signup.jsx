import React, { useState } from 'react'
import Input from '../Input'
import { Link, useNavigate } from 'react-router-dom'
import '../CSS/Signup.css'
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from '../firebase'

const Signup = (props) => {
    const [contact, setContact] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const { displayName, email, password, confirmPassword } = contact;
    const navigate = useNavigate();

    console.log(contact);

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

        if (password !== confirmPassword) {
            alert('Passwords do not match!')
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password)
            await createUserDocFromAuth(user, { displayName });
            alert('Account created! You can now log in ');
            navigate('/login');
        }
        catch (error) {

            alert(error.message)
            console.log(error.message)

        }
    }



    return <div className='container'>
        <h1> Create a Deakin Account</h1>
        <label for='displayName'>Name*</label>
        <Input
            name='displayName'
            type='text'
            placeholder='Name'
            onChange={handleChange}
            value={contact.displayName}
        />
        <br></br>
        <label for='email'>Email*</label>
        <Input
            name='email'
            type='email'
            placeholder='Email'
            onChange={handleChange}
            value={contact.email}
        />

        <br></br>
        <label for='password'>Password*</label>
        <Input
            name='password'
            type='password'
            placeholder='Password'
            onChange={handleChange}
            value={contact.password}
        />
        <br></br>
        <label for='confirmPassword'>Confirm Password*</label>
        <Input
            name='confirmPassword'
            type='password'
            placeholder='Confirm Password'
            onChange={handleChange}
            value={contact.confirmPassword}
        />

        <br></br>

        <button className='button' onClick={handleSubmit}>
            Sign up
        </button>

        <br></br>
        <br></br>

        <Link  className= "button" to='/login'>
            Login
        </Link>
    </div>

}
export default Signup