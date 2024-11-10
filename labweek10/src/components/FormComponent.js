import React, { useState } from 'react';

function FormComponent({ onSubmit }) {
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    address: '',
    city: '',
    province: '',
    postalCode: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email: <input type="email" name="email" onChange={handleChange} /></label><br />
      <label>Full Name: <input type="text" name="fullName" onChange={handleChange} /></label><br />
      <label>Address: <input type="text" name="address" onChange={handleChange} /></label><br />
      <label>City: <input type="text" name="city" onChange={handleChange} /></label><br />
      <label>Province</label>
        <select
          name="province"
          onChange={handleChange}
          
        >
          <option value="">Choose...</option>
          <option value="Alberta">Alberta</option>
          <option value="British Columbia">British Columbia</option>
          <option value="Manitoba">Manitoba</option>
          <option value="Ontario">Ontario</option>
          <option value="Quebec">Quebec</option>
          <option value="Nova Scotia">Nova Scotia</option>
          <option value="Saskatchewan">Saskatchewan</option>
        </select>
      <label>Postal Code: <input type="text" name="postalCode" onChange={handleChange} /></label><br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormComponent;
