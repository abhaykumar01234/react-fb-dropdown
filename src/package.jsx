import React from 'react';
import './package.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

const Package = () => {
  return (
    <Router>
      <div>
        <Routes />
      </div>
    </Router>
  );
};

export default Package;
