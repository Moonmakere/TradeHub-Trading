import React from 'react';
import { Link } from 'react-router-dom';
import './OpenAccount.css';

function OpenAccount() {
    return (
        <section className='open-account-section'>
            <div className='container text-center py-5'>
                <h2 className='section-title mb-4'>Open Your Trading Account Today</h2>
                <p className='section-subtitle mb-4'>Join thousands of traders and investors who trust our platform for their financial goals.</p>
                <div className='d-flex justify-content-center gap-3'>
                    <Link to="/signup" className='btn btn-white-blue' style={{padding: '8px 16px', fontSize: '14px'}}>Create Free Account</Link>
                    <button className='btn btn-white-blue' style={{padding: '8px 16px', fontSize: '14px'}}>Learn More</button>
                </div>
                <p className='mt-4 text-muted'>No hidden charges. Zero account opening fees. Transparent pricing.</p>
            </div>
        </section>
    );
}

export default OpenAccount;