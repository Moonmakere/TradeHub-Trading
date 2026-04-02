import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Pages.css';
import { AuthContext } from '../context/AuthContext';

function Login() {
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });

    const [submitted, setSubmitted] = useState(false);
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setLoginData({
            ...loginData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (loginData.email && loginData.password) {
            setSubmitted(true);
            // Simulate login
            setTimeout(() => {
                // Call login context with user data and token
                login({ email: loginData.email }, 'dummy-token-' + Date.now());
                navigate('/dashboard');
            }, 1500);
        } else {
            alert('Please enter email and password');
        }
    };

    return (
        <div className='login-page'>
            <section className='login-hero'>
                <div className='container py-5'>
                    <h1 className='page-title'>Login to Your Account</h1>
                    <p className='page-subtitle'>
                        Access your portfolio, trades, and market insights.
                    </p>
                </div>
            </section>

            <section className='login-form-section'>
                <div className='container'>
                    <div className='row justify-content-center py-5'>
                        <div className='col-md-5'>
                            {submitted ? (
                                <div className='success-message'>
                                    <div className='success-icon'>✓</div>
                                    <h3>Login Successful!</h3>
                                    <p>Redirecting to your dashboard...</p>
                                </div>
                            ) : (
                                <form className='signup-form' onSubmit={handleSubmit}>
                                    <div className='form-group mb-3'>
                                        <label htmlFor='email' className='form-label'>Email Address</label>
                                        <input
                                            type='email'
                                            id='email'
                                            name='email'
                                            className='form-control'
                                            placeholder='you@example.com'
                                            value={loginData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className='form-group mb-3'>
                                        <label htmlFor='password' className='form-label'>Password</label>
                                        <input
                                            type='password'
                                            id='password'
                                            name='password'
                                            className='form-control'
                                            placeholder='Enter your password'
                                            value={loginData.password}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className='form-group mb-4'>
                                        <div className='form-check'>
                                            <input
                                                type='checkbox'
                                                id='rememberMe'
                                                name='rememberMe'
                                                className='form-check-input'
                                                checked={loginData.rememberMe}
                                                onChange={handleChange}
                                            />
                                            <label className='form-check-label' htmlFor='rememberMe'>
                                                Remember me
                                            </label>
                                        </div>
                                    </div>

                                    <button type='submit' className='btn btn-primary btn-lg w-100'>
                                        Login
                                    </button>

                                    <div className='login-links text-center mt-4'>
                                        <p>Don't have an account? <a href='/signup'>Sign up here</a></p>
                                        <p><a href='#forgot'>Forgot password?</a></p>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <section className='login-security'>
                <div className='container py-5'>
                    <div className='row text-center'>
                        <div className='col-md-4'>
                            <div className='security-feature'>
                                <div className='security-icon'>🔒</div>
                                <h5>Secure Login</h5>
                                <p>Bank-grade encryption for your account security</p>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='security-feature'>
                                <div className='security-icon'>🛡️</div>
                                <h5>Two-Factor Authentication</h5>
                                <p>Additional security layer for your protection</p>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='security-feature'>
                                <div className='security-icon'>✅</div>
                                <h5>Verified & Certified</h5>
                                <p>Fully compliant with regulatory standards</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Login;
