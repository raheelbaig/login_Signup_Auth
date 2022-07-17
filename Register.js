import React from 'react'
import { useState } from 'react'
import { login, register } from "../config/Firebase";


function Register(props) {

    const [form, setForm] = useState({})
    const [loading, setLoading] = useState(false)

    const signup = async () => {
        setLoading(true)
        try {
            var result = await register(form)
            props.changeScreen('dashboard')
        } catch (e) {
            alert(e.message)
        }finally {
            setLoading(false)
        }
    }


    const signin = () => {
        const { email, password } = form

        login(email, password)
    }

    const updateform = (e,key) => {
        setForm({ ...form, [key]: e.target.value })
    }


    return (
        <div>
            <h1>Register</h1><br />
            <input onChange={(e) => updateform(e,'name')} type='text' placeholder='Enter your Name' /><br />
            <input onChange={(e) => updateform(e,'email')} type='email' placeholder='Enter your Email' /><br />
            <input onChange={(e) => updateform(e,'password')} type='password' placeholder='Enter your Password' /><br />
            
            {!loading?<>
            <button onClick={signup}>Register</button>
            <button onClick={signin}>signin</button>
            </>: <img className='loading' src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921'/>
}
        </div>
    )
}

export default Register