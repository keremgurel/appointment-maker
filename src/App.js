import React, { useState } from 'react';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Navigate,
	Route,
	RouterProvider,
} from 'react-router-dom';

import Root, { ROUTES } from './components/root/Root';
import { AppointmentsPage } from './containers/appointmentsPage/AppointmentsPage';
import { ContactsPage } from './containers/contactsPage/ContactsPage';
import './App.css';

function App() {
	/*
  Define state variables for 
  contacts and appointments 
  */
	const [contacts, setContacts] = useState([]);
	const [appointments, setAppointments] = useState([]);

	/*
  Implement functions to add data to
  contacts and appointments
  */
	const addContact = (name, phone, email) => {
		setContacts((prevContacts) => [
			...prevContacts,
			{
				name,
				phone,
				email,
			},
		]);
	};

	const addAppointment = (name, contact, date, time) => {
		setAppointments((prevAppointments) => [
			...prevAppointments,
			{
				name,
				contact,
				date,
				time,
			},
		]);
	};

	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path='/' element={<Root />}>
				<Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
				<Route
					path={ROUTES.CONTACTS}
					element={<ContactsPage contacts={contacts} addContact={addContact} />}
				/>
				<Route
					path={ROUTES.APPOINTMENTS}
					element={
						<AppointmentsPage
							appointments={appointments}
							contacts={contacts}
							addAppointment={addAppointment}
						/>
					}
				/>
			</Route>
		)
	);

	return <RouterProvider router={router} />;
}

export default App;
