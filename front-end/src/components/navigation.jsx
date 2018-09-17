import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/sign_up">Sign Up</Link>
      <Link to="/gameCreation">Create Game</Link>
      <Link to="/gamePage">Game</Link>
      <Link to="/gameOver">Game Over</Link>
    </div>
  )
}

export default Navigation;