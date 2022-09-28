import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
// import LoadingSpinner from "../components/LoadingSpinner"
// import { signInWithEmailAndPassword } from "firebase/auth"
// import { auth } from "../firebase"
import "./styles/Authentication.css"

function Login() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    // e.preventDefault();
    // setLoading(true);
    // try {
    //   await signInWithEmailAndPassword(auth, email, password);
    //   navigate("/profile");
    //   setLoading(false);
    //   setError(false);
    // } catch (e) {
    //   setError(true);
    //   setLoading(false);
    //   console.log(e);
    // }
  }

  return (
    <div className='auth-form-container'>
        <div className='auth-form-wrapper'>
            <h2 className="section-title auth-title">Login</h2>
            <form onSubmit={handleSubmit} className="auth-form">
                <input type="email" placeholder='Email' onChange={(e) => setEmail(e.currentTarget.value)} required/>
                <input type="password" minLength={6} placeholder='Password' onChange={(e) => setPassword(e.currentTarget.value)} required/>
                <button className="auth-button">Login</button>
                {error && <p className='warning'>Something went wrong...</p>}
            </form>
            <p className="auth-question" style={{textAlign: "center"}}>Don't have an account? <Link to="/register">Register</Link></p>
        </div>
    </div>
  )
}

export default Login