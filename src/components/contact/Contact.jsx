import React, { useState } from 'react'
import './Contact.scss'
import axios from 'axios';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

    
        const botToken = '7021165985:AAGwqbId3W_92wuIloV_yeJzDM4Q3n1D7ew';
        const chatId = '-4256618912';
        const text = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    
        axios
          .post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          chat_id: chatId,
          text: text,
        })
        .then(response => {
          console.log('Message sent successfully:', response);
        })
        .catch(error => {
          console.error('Error sending message:', error);
        });
    
        setName('');
        setEmail('');
        setMessage('');
    };
  return (
    <section id='contact'>
      <div className='contact_div'>
          <div className="container_2">
              <h3 className='contact_h3'>Contact with me</h3>
              <p className='contact_p'>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
              <div className="contact">
                  <form onSubmit={handleSubmit} className="inputs">
                      <div className="input">
                          <p>Fullname</p>
                          <input required type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your name...' />
                      </div>
                      <div className="input">
                          <p>Email</p>
                          <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter you email...' />
                      </div>
                      <div className="input">
                          <p className='message_p'>Message</p>
                          <textarea required value={message} onChange={(e) => setMessage(e.target.value)} name="" id="" cols="30" rows="10" placeholder='Type your message'></textarea>
                      </div>
                      <button type='submit'>Send</button>
                  </form>
              </div>
          </div>
      </div>
    </section>
  )
}

export default Contact