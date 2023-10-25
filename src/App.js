import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
      <div className="App">
        <div className="registration-form">
          <h2>Register</h2>
          <form>
            <div className="form-group">
              <label htmlFor="fullName">First Name and Last Name</label>
              <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your name..."
                />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone number</label>
              <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="+996-700-700-700"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email.."
              />
            </div>
            <div className="preview-data">
              <h3>Your information:</h3>
              <p>First Name and Last Name: {formData.fullName}</p>
              <p>Phone number: {formData.phoneNumber}</p>
              <p>Email: {formData.email}</p>
            </div>
          </form>
        </div>
      </div>
  );
}

export default App;

