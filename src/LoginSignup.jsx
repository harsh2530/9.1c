import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

const LoginSignup = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            {isLoggedIn && (
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            )}
          </ul>
        </nav>

        <Route
          path="/login"
          render={() => (
            <Login setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
          )}
        />
        <Route
          path="/signup"
          render={() => (
            <Signup setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
          )}
        />
      </div>
    </Router>
  );
};

export default LoginSignup;