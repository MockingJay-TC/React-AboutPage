import React from 'react'
import {Route} from 'react-router-dom';
import './dashboard.css';
import Sidebar from './Dashboard Component/Sidebar/sidebar';
import Dashbuild from './Dashboard Container/Dashboard/main';

function Dashboard() {
  return (
    <div className="App">
      <Route component={Sidebar}/>
      <Route path="/" component={Dashbuild}/>
   
    </div>
  );
}

export default Dashboard;
