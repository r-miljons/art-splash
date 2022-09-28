import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
// import LoadingSpinner from "../components/LoadingSpinner"
// import { signInWithEmailAndPassword } from "firebase/auth"
// import { auth } from "../firebase"
import "./styles/Authentication.css"

function Login() {
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);
	const [username, setUsername] = useState(null);
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const [passwordsMatch, setPasswordsMatch] = useState(true);
	const navigate = useNavigate();

  function checkPassword(string) {
		if (password === string) {
			setPasswordsMatch(true);
		} else {
			setPasswordsMatch(false);
		}
	}

  async function handleSubmit(e) {
    // e.preventDefault();
    // setLoading(true);
    // try {
    //   await signInWithEmailAndPassword(auth, email, password);
    //   navigate("/");
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
            <h2 className="section-title auth-title">Register</h2>
            <form onSubmit={handleSubmit} className="auth-form">
                <input
                  type="text"
                  placeholder="Username"
                  onChange={(e) => setUsername(e.currentTarget.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.currentTarget.value)}
                  required
                />
                <input
                  type="password"
                  minLength={6}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.currentTarget.value)}
                  required
                />
                <input
                  type="password"
                  minLength={6}
                  placeholder="Confirm Password"
                  onChange={(e) => checkPassword(e.currentTarget.value)}
                  required
                />
                {!passwordsMatch && (
                  <p className="warning">Passwords do not match!</p>
                )}
                <button className="auth-button">Register</button>
                {error && <p className='warning'>Something went wrong...</p>}
            </form>
            <p className="auth-question" style={{textAlign: "center"}}>Already have an account? <Link to="/login">Login</Link></p>
        </div>
    </div>
  )
}

export default Login