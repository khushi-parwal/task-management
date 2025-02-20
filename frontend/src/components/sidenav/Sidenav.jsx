import React from 'react';
import { FaProjectDiagram, FaTasks } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoIosTime } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import { MdDashboard } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import "./sidenav.css";

function Sidenav() {
  const location = useLocation();

  return (
    <div className='sidenav-main-container'>
    
      <div className='sidenav-list-main-container'>
        <Link to="/admin/dashboard"><div className={`sidenav-list ${location.pathname === "/admin/dashboard" ? "default-hover" : ""}`}><span><MdDashboard className='sidenav-icon' /></span><p className='sidenav-list-text'>Dashboard</p></div></Link>
        <Link to="/admin/employees"><div className={`sidenav-list ${location.pathname === "/admin/employees" ? "default-hover" : ""}`}><span><FaPeopleGroup className='sidenav-icon' /></span><p className='sidenav-list-text'>Employees</p></div></Link>
        <Link to="/admin/projects"><div className={`sidenav-list ${location.pathname === "/admin/projects" ? "default-hover" : ""}`}><span><FaProjectDiagram className='sidenav-icon' /></span><p className='sidenav-list-text'>Projects</p></div></Link>
        <Link to="/admin/tasks"><div className={`sidenav-list ${location.pathname === "/admin/tasks" ? "default-hover" : ""}`}><span><FaTasks className='sidenav-icon' /></span><p className='sidenav-list-text'>Tasks</p></div></Link>
        <Link to="/admin/timesheets"><div className={`sidenav-list ${location.pathname === "/admin/timesheets" ? "default-hover" : ""}`}><span><IoIosTime className='sidenav-icon' /></span><p className='sidenav-list-text'>Timesheets</p></div></Link>
        <Link to="/"><div className={`sidenav-list ${location.pathname === "/logout" ? "default-hover" : ""}`}><span><LuLogOut className='sidenav-icon' /></span><p className='sidenav-list-text'>Logout</p></div></Link>
      </div>
    </div>
  )
}

export default Sidenav