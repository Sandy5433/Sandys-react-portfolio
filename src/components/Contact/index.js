import React, { useState } from 'react';
import { checkMessage, validateEmail } from '../utils/helpers';

function Contact() {
  // Create state variables for the fields in the form
  // Setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] =useState('')

  const handleInputChange = (e) => {
    // Getting the value and field of the input which triggered the change
    const { target } = e;
    const inputType = target.field;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, name, and message
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the name is empty. If so we set an error message to be displayed on the page.
    if (!checkName(name)) {
        setErrorMessage('Name is required');
        return;
      }
    if (!validateEmail(email)) {
      setErrorMessage('Email address is invalid');
      //exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then check to see if the message is not valid. If so, we set an error message regarding the password.
    }
    if (!checkMessage(message)) {
      setErrorMessage('Message is required');
      return;
    }
    alert(`Hello ${name}`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setMessage('');
    setEmail('');
  };

  return (
    <div>
      <h3>Contact</h3>
      <form className="form">
      <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Your Name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="sample@email.com"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Type a message"
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
