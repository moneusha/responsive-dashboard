import React from 'react';
import './SignIn.css';

const SignIn = () => {
  return (
    <div className="signin-page">
      <h1>Sign In Page</h1>
      <div className="card">
        <label>Enter Name</label>
        <input type="text"/>
        <br/>
        <label>Enter Password</label>
        <input type="password"/>
        <br/>
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default SignIn;
