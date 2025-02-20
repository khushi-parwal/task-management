import * as React from 'react';
import "./navbar.css";
function Navbar() {
    return (
        <div className='nav-main-container'>
            <div><p className='nav-main-text'>Zidio<span>Task Management System</span></p></div>
            <div className='nav-notification-container'>
                {/* <div className='task-read'>
                    <IoIosNotifications  className='read-icon' />
                </div> */}
                <div>
                    <p className='nav-day-text'>Wednesday</p>
                    <p className='nav-date-text'>20/02/2025</p>
                </div>
            </div>
        </div>
    )
}
export default Navbar