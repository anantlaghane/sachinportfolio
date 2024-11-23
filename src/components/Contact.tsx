import React, { useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser'; // Make sure EmailJS is installed
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const sendEmail = (e: any) => {
    e.preventDefault(); // Prevent default form submission

    // Validation logic
    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    // Check if the fields are filled correctly before sending the email
    if (name !== '' && email !== '' && message !== '') {
      const templateParams = {
        name: name,
        email: email,
        message: message,
      };

      // EmailJS send function
      emailjs
        .send('service_7xsxt6v', 'template_q16aglx', templateParams, 'oa3buMvyOrzbg00md') // Replace with actual values
        .then(
          (response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message Sent Successfully!');
            setName('');
            setEmail('');
            setMessage('');
          },
          (error) => {
            console.log('FAILED...', error);
            alert('Failed to send message. Please try again later.');
          }
        );
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
            onSubmit={sendEmail} // Bind the form's onSubmit event to sendEmail
          >
            <div className="form-flex">
              <TextField
                required
                id="outlined-required"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
                variant="standard" 
              />
              <TextField
                required
                id="outlined-required"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                error={emailError}
                helperText={emailError ? "Please enter your email or phone number" : ""}
                 variant="standard"
              />
            </div>
            <TextField
              required
              id="outlined-multiline-static"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
               variant="standard"
              
            />
            <Button variant="contained" endIcon={<SendIcon />} type="submit">
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
