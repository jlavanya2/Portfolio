import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const [theme, setTheme] = useState('coffee');

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className="navbar bg-base-100 shadow-lg sticky top-0 z-50 border-b border-base-300">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"></path>
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to="/" className={isActive('/') ? 'active' : ''}>Projects</Link></li>
            <li><Link to="/about" className={isActive('/about') ? 'active' : ''}>About</Link></li>
            <li><Link to="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</Link></li>
            <li><Link to="/education" className={isActive('/education') ? 'active' : ''}>Education</Link></li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl font-bold text-primary">
          Portfolio
        </Link>
      </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">
          <li>
            <Link 
              to="/" 
              className={`btn btn-sm ${isActive('/') ? 'btn-primary' : 'btn-ghost'}`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={`btn btn-sm ${isActive('/about') ? 'btn-primary' : 'btn-ghost'}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={`btn btn-sm ${isActive('/contact') ? 'btn-primary' : 'btn-ghost'}`}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link 
              to="/education" 
              className={`btn btn-sm ${isActive('/education') ? 'btn-primary' : 'btn-ghost'}`}
            >
              Education
            </Link>
          </li>
        </ul>
      </div>
      
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
            </div>
          </div>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow-lg bg-base-100 rounded-box w-52">
            <li><a onClick={() => handleThemeChange('coffee')}>☕ Coffee</a></li>
            <li><a onClick={() => handleThemeChange('cupcake')}>🧁 Cupcake</a></li>
            <li><a onClick={() => handleThemeChange('light')}>🌅 Light</a></li>
            <li><a onClick={() => handleThemeChange('dark')}>🌙 Dark</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
