import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

export const ROUTES = {
	CONTACTS: '/contacts',
	APPOINTMENTS: '/appointments',
};

function Root() {
	return (
		<div className='container'>
			<nav className='navbar'>
				<NavLink to='/' className='navbar-logo'>
					Appointment Planner
				</NavLink>
				<div className='navbar-links'>
					<NavLink
						to={ROUTES.CONTACTS}
						className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
					>
						Contacts
					</NavLink>
					<NavLink
						to={ROUTES.APPOINTMENTS}
						className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
					>
						Appointments
					</NavLink>
				</div>
			</nav>

			<div className='main-content'>
				<Outlet />
			</div>
		</div>
	);
}

export default Root;
