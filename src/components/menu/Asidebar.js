import React from 'react';
import './Sidebar.css';
import Sidebarlink from './Sidebarlink';
import Dropdownbar from './Dropdownbar';


function AsideBar() {
    return (
        <div className="asideBar">
            <h1>Test Pool</h1>
            <Sidebarlink name="Dashboard" navimg="tachometer-alt" link="#" />
            <Sidebarlink name="Announcements" navimg="megaphone" link="#" />
            <Dropdownbar name="Requests" navimg="calendar-check" >
                <Sidebarlink name="Requests One" navimg="filter" link="#" />
            </Dropdownbar>
            <Dropdownbar name="Students" navimg="calendar-check" >
                <Sidebarlink name="Student One" navimg="filter" link="#" />
                <Sidebarlink name="Student Two" navimg="filter" link="#" />
                <Sidebarlink name="Student Three" navimg="filter" link="#" />
            </Dropdownbar>
            <Dropdownbar name="Alumni" navimg="user-tag" >
                <Sidebarlink name="Alumni One" navimg="filter" link="#" />
                <Sidebarlink name="Alumni Two" navimg="filter" link="#" />
                <Sidebarlink name="Alumni Three" navimg="filter" link="#" />
            </Dropdownbar>

            <Sidebarlink name="Staff" navimg="users-cog" link="#" />
            <Sidebarlink name="Companies" navimg="building" link="#" />
            <Dropdownbar name="Employers" navimg="users" >
                <Sidebarlink name="Employers One" navimg="filter" link="#" />
                <Sidebarlink name="Employers Two" navimg="filter" link="#" />
                <Sidebarlink name="Employers Three" navimg="filter" link="#" />
            </Dropdownbar>
            <Dropdownbar name="Jobs" navimg="briefcase" >
                <Sidebarlink name="Jobs One" navimg="filter" link="#" />
                <Sidebarlink name="Jobs Two" navimg="filter" link="#" />
                <Sidebarlink name="Jobs Three" navimg="filter" link="#" />
            </Dropdownbar>

            <Sidebarlink name="Interviews" navimg="user-tie" link="#" />
            <Sidebarlink name="Events" navimg="calendar-day" link="#" />
            <Sidebarlink name="Registrations" navimg="sign-in" link="#" />
        </div>
    )
}

export default AsideBar;