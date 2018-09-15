import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/sign_up">Sign Up</NavLink>
      <NavLink to="/gameCreation">Create Game</NavLink>
    </div>
  )
}

export default Navigation;