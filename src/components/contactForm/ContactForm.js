import React from 'react';
import InputMask from 'react-input-mask';

export const ContactForm = ({ name, setName, phone, setPhone, email, setEmail, handleSubmit }) => {
	const handlePhoneChange = (event) => {
		const value = event.target.value.replace(/[^\d]/g, '');
		setPhone(value);
	};

	return (
		<form onSubmit={handleSubmit} className='form'>
			<input
				type='text'
				value={name}
				onChange={(e) => setName(e.target.value)}
				placeholder='Name'
				required
			/>
			<InputMask
				mask='(999) 999-9999'
				value={phone}
				onChange={handlePhoneChange}
				placeholder='Phone'
			>
				{(inputProps) => <input {...inputProps} type='tel' required />}
			</InputMask>
			<input
				type='email'
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				placeholder='Email'
				required
			/>
			<button type='submit'>Add Contact</button>
		</form>
	);
};
