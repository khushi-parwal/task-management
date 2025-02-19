import * as React from 'react';
import { IoIosNotifications } from "react-icons/io";
import "./navbar.css";
function Navbar() {
    return (
        <div className='nav-main-container'>
            <div><p className='nav-main-text'>Zidio<span>Task Management System</span></p></div>
            {/* <div className='nav-search-container'>
                <input placeholder='Search your task here...' />
                <div className='task-read'>
                    <IoIosSearch className='read-icon' />
                </div>
            </div> */}
            <div className='nav-notification-container'>
                <div className='task-read'>
                    <IoIosNotifications  className='read-icon' />
                </div>
                <div>
                    <p className='nav-day-text'>Wednesday</p>
                    <p className='nav-date-text'>19/02/2025</p>
                </div>
            </div>
        </div>
    )
}
export default Navbar