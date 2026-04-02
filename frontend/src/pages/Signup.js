import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Pages.css';
import { AuthContext } from '../context/AuthContext';

function Signup() {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        accountType: 'individual',
        agreeTerms: false
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password === formData.confirmPassword && formData.agreeTerms) {
            setSubmitted(true);
            setTimeout(() => {
                // Call login context with user data and token
                login({ email: formData.email, phone: formData.phone, accountType: formData.accountType }, 'dummy-token-' + Date.now());
                navigate('/dashboard');
            }, 2000);
        } else {
            alert('Please check your passwords and agree to terms');
        }
    };

    return (
        <div className='signup-page'>
            <section className='signup-hero'>
                <div className='container py-5'>
                    <h1 className='page-title'>Open Your Free Account</h1>
                    <p className='page-subtitle'>
                        Start investing with zero account opening fees and transparent pricing.
                    </p>
                </div>
            </section>

            <section className='signup-form-section'>
                <div className='container'>
                    <div className='row justify-content-center py-5'>
                        <div className='col-md-6'>
                            {submitted ? (
                                <div className='success-message'>
                                    <div className='success-icon'>✓</div>
                                    <h3>Account Created Successfully!</h3>
                                    <p>Welcome to TradeHub. Redirecting to your dashboard...</p>
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
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className='form-group mb-3'>
                                        <label htmlFor='phone' className='form-label'>Phone Number</label>
                                        <input
                                            type='tel'
                                            id='phone'
                                            name='phone'
                                            className='form-control'
                                            placeholder='+91 9876543210'
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className='form-group mb-3'>
                                        <label htmlFor='accountType' className='form-label'>Account Type</label>
                                        <select
                                            id='accountType'
                                            name='accountType'
                                            className='form-select'
                                            value={formData.accountType}
                                            onChange={handleChange}
                                        >
                                            <option value='individual'>Individual</option>
                                            <option value='huf'>HUF</option>
                                            <option value='nri'>NRI</option>
                                            <option value='corporate'>Corporate</option>
                                        </select>
                                    </div>

                                    <div className='form-group mb-3'>
                                        <label htmlFor='password' className='form-label'>Password</label>
                                        <input
                                            type='password'
                                            id='password'
                                            name='password'
                                            className='form-control'
                                            placeholder='At least 8 characters'
                                            value={formData.password}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className='form-group mb-3'>
                                        <label htmlFor='confirmPassword' className='form-label'>Confirm Password</label>
                                        <input
                                            type='password'
                                            id='confirmPassword'
                                            name='confirmPassword'
                                            className='form-control'
                                            placeholder='Confirm password'
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className='form-group mb-4'>
                                        <div className='form-check'>
                                            <input
                                                type='checkbox'
                                                id='agreeTerms'
                                                name='agreeTerms'
                                                className='form-check-input'
                                                checked={formData.agreeTerms}
                                                onChange={handleChange}
                                            />
                                            <label className='form-check-label' htmlFor='agreeTerms'>
                                                I agree to the Terms & Conditions and Privacy Policy
                                            </label>
                                        </div>
                                    </div>

                                    <button type='submit' className='btn btn-primary btn-lg w-100'>
                                        Create Account
                                    </button>

                                    <p className='login-link text-center mt-3'>
                                        Already have an account? <a href='/login'>Login here</a>
                                    </p>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <section className='signup-benefits'>
                <div className='container py-5'>
                    <h2 className='section-title text-center mb-5'>Why Choose Us?</h2>
                    <div className='row g-4'>
                        <div className='col-md-4'>
                            <div className='benefit-card'>
                                <div className='benefit-icon'>💰</div>
                                <h5>Zero Account Fees</h5>
                                <p>No account opening fees or minimum balance required</p>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='benefit-card'>
                                <div className='benefit-icon'>⚡</div>
                                <h5>Instant Verification</h5>
                                <p>Complete KYC in minutes with our simplified process</p>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='benefit-card'>
                                <div className='benefit-icon'>🔒</div>
                                <h5>Secure & Trusted</h5>
                                <p>Bank-grade security and regulatory compliance</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Signup;
