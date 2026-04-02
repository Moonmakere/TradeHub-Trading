import React from 'react';
import './Pages.css';

function Support() {
    const faqs = [
        {
            question: 'How do I open an account?',
            answer: 'Click on "Open Account" button and fill in your details. Our team will verify your information and activate your account within 24 hours.'
        },
        {
            question: 'What is the minimum balance required?',
            answer: 'There is no minimum balance required to open an account. You can start investing with any amount you wish.'
        },
        {
            question: 'What are the trading charges?',
            answer: 'We offer flat ₹20 charges for intraday and F&O trades. Equity delivery and mutual funds are completely free with zero commission.'
        },
        {
            question: 'How do I contact customer support?',
            answer: 'You can reach us via email, phone, or through our support portal. Our support team is available 24/5 during market hours.'
        },
        {
            question: 'Is my money safe with you?',
            answer: 'Yes, your funds are completely safe. All client money is held in segregated bank accounts as per SEBI regulations. We are registered with NSE, BSE, and MCX.'
        },
        {
            question: 'How do I withdraw my money?',
            answer: 'You can withdraw your funds anytime using our fund transfer feature. Withdrawals are processed within 1-2 business days.'
        }
    ];

    const supportChannels = [
        {
            name: 'Email',
            value: 'support@tradehub.com',
            icon: '📧'
        },
        {
            name: 'Phone',
            value: '+91-1234-567-890',
            icon: '📞'
        },
        {
            name: 'Live Chat',
            value: 'Available 9 AM - 6 PM',
            icon: '💬'
        },
        {
            name: 'Support Portal',
            value: 'support.tradehub.com',
            icon: '🌐'
        }
    ];

    return (
        <div className='support-page'>
            <section className='support-hero'>
                <div className='container py-5'>
                    <h1 className='page-title'>Support & Help</h1>
                    <p className='page-subtitle'>
                        We're here to help. Get answers to your questions and resolve issues quickly.
                    </p>
                </div>
            </section>

            <section className='support-channels'>
                <div className='container py-5'>
                    <h2 className='section-title text-center mb-5'>Contact Us</h2>
                    <div className='row g-4'>
                        {supportChannels.map((channel, index) => (
                            <div className='col-md-6 col-lg-3' key={index}>
                                <div className='channel-card'>
                                    <div className='channel-icon'>{channel.icon}</div>
                                    <h5 className='channel-name'>{channel.name}</h5>
                                    <p className='channel-value'>{channel.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className='faq-section'>
                <div className='container py-5'>
                    <h2 className='section-title text-center mb-5'>Frequently Asked Questions</h2>
                    <div className='row'>
                        <div className='col-lg-8 offset-lg-2'>
                            {faqs.map((faq, index) => (
                                <div className='faq-item' key={index}>
                                    <div className='faq-question'>
                                        <h5>{faq.question}</h5>
                                        <span className='faq-icon'>+</span>
                                    </div>
                                    <div className='faq-answer'>
                                        <p>{faq.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className='support-cta'>
                <div className='container py-5 text-center'>
                    <h2>Still need help?</h2>
                    <p>Our support team is ready to assist you</p>
                    <button className='btn btn-primary btn-lg mt-3'>Create Support Ticket</button>
                </div>
            </section>
        </div>
    );
}

export default Support;
