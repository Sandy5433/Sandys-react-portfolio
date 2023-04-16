import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

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
    const inputType = target.name;
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

    //check if the name is empty. If so we set an error message to be displayed on the page.
    if (!name) {
        setErrorMessage('*Name is required');
        return;
      }
    if (!validateEmail(email)) {
      setErrorMessage('*Email address is invalid');
      //exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then check to see if the message is empty. If so, we set an error message regarding the message.
    }
    if (!message) {
      setErrorMessage('*Message is required');
      return;
    }
    ;

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setMessage('');
    setEmail('');
    setErrorMessage('');
  };

  return (
    <div>
      <h3 className='page-title'>Contact</h3>
      <form className="form">
      <div className="field">
      <label>Name:</label>
      </div>
      <div className="input">
      <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Your Name"
        />
        </div>
        <div className="field">
        <label>Email address:</label>
        </div>
        <div className="input">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="sample@email.com"
        />
        </div>
        <div className="field">
        <label>Message:</label>
        </div>
        <div className="input">
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Type a message"
        />
        </div>
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
