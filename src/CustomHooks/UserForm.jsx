import React from 'react'
import UseFormInput from './UseFormInput';

const UserForm = () => {
    const name = UseFormInput('');
  const email = UseFormInput('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name.value);
    console.log('Email:', email.value);
    name.reset();
    email.reset();
  };
  return (
    <div>
      <h1>Form Example</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" {...name} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" {...email} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default UserForm