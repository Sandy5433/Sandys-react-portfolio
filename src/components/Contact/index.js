import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <section>
      <h3 className='page-title'>Contact</h3>
      <form className="form" id="contact-form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="name">Name:</label>
        </div>
        <div className="input">
          <input
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        <div className="field">
          <label htmlFor="email">Email address:</label>
        </div>
        <div className="input">
          <input
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <div className="field">
          <label htmlFor="message">Message:</label>
        </div>
        <div className="input">
          <textarea
            name="message"
            rows="5"
            defaultValue={message}
            onBlur={handleChange}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;