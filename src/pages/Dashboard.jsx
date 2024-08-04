import React from 'react';
import BusinessDesign from '../components/BusinessDesign';
import CheckTable from '../components/CheckTable';
import ComplexTable from '../components/ComplexTable';
import ControlCardSecurity from '../components/ControlCardSecurity';
import CustomCalendar from '../components/CustomCalendar';
import DailyTraffic from '../components/DailyTraffic';
import CustomPieChart from '../components/PieChart';
import Starbucks from '../components/Starbucks';
import Tasks from '../components/Tasks';
import TeamMembers from '../components/TeamMembers';
import WeeklyRevenue from '../components/WeeklyRevenue';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="row">
        <div className="col">
          <CheckTable />
        </div>
        <div className="col">
          <WeeklyRevenue />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <DailyTraffic />
        </div>
        <div className="col">
          <CustomPieChart />
        </div>
      </div>
     
      <div className="row">
        
        <div className="col">
          <ComplexTable />
        </div>
        <div className="col">
          <Tasks />
        </div>
        <div className="col">
          <CustomCalendar />
        </div>
      </div>
      <div className="row">
     
        <div className="col">
          <ControlCardSecurity />
        </div>
        <div className="col">
          <Starbucks />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <BusinessDesign />
        </div>
        <div className="col">
          <TeamMembers />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
