import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <h1>Stevens Fit</h1>
      <nav>
        <ul className="nav-links">
          <li>
            <NavLink to="/" activeClassName="active" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard" activeClassName="active">
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/exercise-catalog" activeClassName="active">
              Exercise Catalog
            </NavLink>
          </li>
          <li>
            <NavLink to="/workout-tracker" activeClassName="active">
              Tracker
            </NavLink>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
