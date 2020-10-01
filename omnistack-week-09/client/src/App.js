import React from 'react';

import './App.css';

import Routes from './routes';

import logo from './assets/logo.svg';

export default function App() {
  
  return (
    <div className="container">
      <a href="/">
        <img src={logo} alt="AirCnC" />
      </a>
      <div className="content">
        <Routes />
      </div>
    </div>
  );
}