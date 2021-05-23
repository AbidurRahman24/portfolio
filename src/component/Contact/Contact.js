import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className='app'>
            <form className='form'>
                <h1>Contact Form</h1>
                <label>Name:</label>
                <input type="name" placeholder='Enter Your Name'/>
                <label>Email</label>
                <input type="email" placeholder='Enter Your Email' />
                <label>Message</label>
                <textarea name="textarea" id="" cols="30" rows="10" placeholder='Enter Your Massage'></textarea>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default Contact;