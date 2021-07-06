import React from 'react';
import Dropdown from '../../components/Dropdown';
import s from './dashboard.module.scss';
import config from './config/menu';

const Dashboard = () => {
  return (
    <div>
      <h1 className={s.app}>Dashboard Page</h1>
      <div className={s.box}>
        <Dropdown config={config} />
      </div>
    </div>
  );
};

export default Dashboard;
