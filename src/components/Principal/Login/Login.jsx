import React from 'react'
import { loginUrl } from '../../../config/spotify'
import "./Login.css"

function Login() {
    return (
        <div className='login' >
            <img
                src="https://www.soydemac.com/wp-content/uploads/2019/10/logo-spotify-1024x427.jpg.webp"
                alt=""
            />
            <a href={loginUrl} >Login</a>
        </div>
    )
}

export default Login