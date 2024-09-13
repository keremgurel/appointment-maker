import React, { useState, useEffect } from 'react';

import { ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from '../../components/tileList/TileList';

export const ContactsPage = ({ contacts, addContact }) => {
	/*
  Define state variables for 
  contact info and duplicate check
  */
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [duplicate, setDuplicate] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		/*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
		if (!duplicate) {
			addContact(name, phone, email);
			setName('');
			setPhone('');
			setEmail('');
		}
	};

	/*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
	useEffect(() => {
		const nameIsDuplicate = contacts.some((contact) => contact.name === name);
		setDuplicate(nameIsDuplicate);
	}, [name, contacts]);

	return (
		<div>
			<section className='form'>
				<h2>Add Contact</h2>
				<ContactForm
					name={name}
					phone={phone}
					email={email}
					setName={setName}
					setPhone={setPhone}
					setEmail={setEmail}
					handleSubmit={handleSubmit}
				/>
			</section>
			<hr />
			<section className='tile-list'>
				<h2>Contacts</h2>
				<TileList
					tiles={contacts.map((contact) => ({
						name: contact.name,
						description: {
							phone: contact.phone,
							email: contact.email,
						},
					}))}
				/>
			</section>
		</div>
	);
};
