
import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

//formState reflects whatever string you have in the input box at any given moment, regardless of if it was submitted or not

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });// set initial state to empty strings
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        // check if email is in valid format, log any errors
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } 
        // check if that message and name are not empty, dynamically log any errors
        else {
            if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        } 
        // only update page if the inputs fulfil the requirements
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
          }
        // ...formState will retain the other properties you don't want altered
        // e.target.name refers to the attribute called name, not the value
        console.log('errorMessage', errorMessage);
    }
    function handleSubmit(e){
        e.preventDefault();
        console.log(formState);
    }
    return (
        <section>
          <h1>Contact me</h1>
          <form id="contact-form" onSubmit={handleSubmit}>
            {/* // name input */}
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" defaultValue={name} onBlur={handleChange}/>
            </div>
            {/* // email input */}
            <div>
                <label htmlFor="email">Email address:</label>
                <input type="email" name="email"defaultValue={email} onBlur={handleChange}/>
            </div>
            {/* // message text area */}
            <div>
                <label htmlFor="message">Message:</label>
                <textarea name="message" rows="5"  defaultValue={message} onBlur={handleChange}/>
            </div>
            {errorMessage && (/*same as: if(errorMessage) */
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
            <button type="submit">Submit</button>
          </form>
        </section>
      )// JSX
}
    
    export default ContactForm;