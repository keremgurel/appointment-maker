import React from 'react';

import { ContactPicker } from '../contactPicker/ContactPicker';

const getTodayString = () => {
	const [month, day, year] = new Date().toLocaleDateString('en-US').split('/');
	return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
};

export const AppointmentForm = ({
	contacts,
	title,
	setTitle,
	contact,
	setContact,
	date,
	setDate,
	time,
	setTime,
	handleSubmit,
}) => {
	return (
		<form onSubmit={handleSubmit} className='form'>
			<input
				type='text'
				name='title'
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				placeholder='Appointment Title'
				required
			/>
			<input
				type='date'
				name='date'
				value={date}
				onChange={(e) => setDate(e.target.value)}
				min={getTodayString()}
				required
			/>
			<input
				type='time'
				name='time'
				value={time}
				onChange={(e) => setTime(e.target.value)}
				required
			/>
			<ContactPicker
				contacts={contacts}
				value={contact}
				name={contact.name}
				onChange={(e) => setContact(e.target.value)}
			/>
			<button type='submit'>Add Appointment</button>
		</form>
	);
};
