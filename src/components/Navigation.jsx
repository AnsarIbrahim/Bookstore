import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <h1>Bookstore CMS</h1>
    <ul>
      <li>
        <Link to="/">Books</Link>
      </li>
      <li>
        <Link to="/categories">Categories</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
