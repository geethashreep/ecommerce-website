import React, { useState } from 'react';
import '../components/style.css';
import cellphone from './cellphone.jpg';

const MainForm: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    emailError: '',
    password: '',
    passwordError: ''
  });

  const validateEmail = (email: string) => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
      [`${name}Error`]: '' // Reset error when user types
    });
  };

  const handleButtonClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let valid = true;
    const errors = {
      emailError: '',
      passwordError: ''
    };

    if (!validateEmail(formState.email)) {
      errors.emailError = 'Enter correct email';
      valid = false;
      
    }

    if (formState.password.trim().length < 6) {
      errors.passwordError = 'Password must be at least 6 characters long';
      valid = false;
    }

    setFormState({
      ...formState,
      ...errors
    });

    if (valid) {
      alert('Signed up successfully');
      // Clear the form after successful registration
      setFormState({
        name: '',
        email: '',
        emailError: '',
        password: '',
        passwordError: ''
      });
    }
  };

  return (
    <div className='main-form'>
      <img id="cellphone" src={cellphone} alt='cellphone' />
      <div className='registration-form'>
        <h2 id="acc">Create an Account</h2>
        <p>Enter your details below</p>
        <form id="forms" onSubmit={handleButtonClick}>
          <input
            type='text'
            name='name'
            placeholder='Name'
            className='textFeild'
            value={formState.name}
            onChange={handleChange}
            required
          /><br/>
          <input
            type='email'
            name='email'
            placeholder='Email or PhoneNumber'
            className='textFeild'
            value={formState.email}
            onChange={handleChange}
            required
          /><br/>
          {formState.emailError && <p className="error">{formState.emailError}</p>}
          <input
            type='password'
            name='password'
            placeholder='Password'
            className='textFeild'
            value={formState.password}
            onChange={handleChange}
            required
          /><br/>
          {formState.passwordError && <p className="error">{formState.passwordError}</p>}
          <button type="submit" id="button">Create Account</button><br/>
          <p>Already have an account?  <a id="login" href="loginpage.tsx">LogIn</a> </p>
        </form>
      </div>
    </div>
  );
};

export default MainForm;
