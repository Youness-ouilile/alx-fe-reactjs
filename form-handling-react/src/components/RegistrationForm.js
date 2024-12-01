import React , { useState } from 'react';
import './RegistrationForm.css';

const RegistrationForm = () =>{

    const [FormData, SetFormData] =useState({
        username:'',email:'',password:''
    });
    const [handleChange]= (e)=>{
        const {name,value}=e.target;
        SetFormData ((prevState)=>({...prevState,[name]:value}))
    };
};
const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
  });
const handleSubmit =(e)=>{
    e.prenventDefault();
    if (validateForm()) {
       
        console.log('Form submitted:', formData);
        
      }
};
const validateForm = () => {
    const newErrors = { username: '', email: '', password: '' };
    let isValid = true;

    if (!formData.username) {
      newErrors.username = 'Username is required';
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };
  return (
    <div><h1>RegistrationForm</h1>
    <Form onClick={handleSubmit}>
    <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type='submit'>register</button>
        </Form>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </div>
  )


export default RegistrationForm