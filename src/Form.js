import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { RingLoader } from 'react-spinners';

export function Form() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [msg, setMsg] = useState('');
	const [phone, setPhone] = useState('');
	const [postcode, setPostcode] = useState('');
	const [city, setCity] = useState('');
	const [address, setAddress] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [showPopup, setShowPopup] = useState({ show: false, message: '' });
	const [countdown, setCountdown] = useState(3);

	useEffect(() => {
		let timer;
		if (showPopup.show) {
			setCountdown(3); // Reset countdown
			timer = setInterval(() => {
				setCountdown((prevCountdown) => {
					if (prevCountdown <= 1) {
						clearInterval(timer);
						setShowPopup({ show: false, message: '' });
						return 0;
					}
					return prevCountdown - 1;
				});
			}, 1000);
		}
		return () => clearInterval(timer);
	}, [showPopup.show]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		// window.scrollTo({ top: 0, behavior: 'smooth' });
		setIsLoading(true);

		try {
			const formData = new FormData();
			formData.append('name', name);
			formData.append('email', email);
			formData.append('msg', msg);
			formData.append('phone', phone);
			formData.append('postcode', postcode);
			formData.append('city', city);
			formData.append('address', address);

			await axios.post('/form-handler.php', formData);

			setIsLoading(false);

			// Resetting form state
			setName('');
			setEmail('');
			setMsg('');
			setPhone('');
			setPostcode('');
			setCity('');
			setAddress('');

			// Resetting reCAPTCHA
			if (window.grecaptcha) {
				window.grecaptcha.reset();
			}

			// Show success popup
			setShowPopup({
				show: true,
				message: 'Formularz został wysłany pomyślnie!',
			});
		} catch (error) {
			setIsLoading(false);
			setShowPopup({
				show: true,
				message: 'Błąd podczas wysyłania formularza. Spróbuj ponownie.',
			});
		}
	};

	return (
		<div className='wrapper'>
			<div className='form-wrapper relative' id='report'>
				<form onSubmit={handleSubmit} className='form'>
					<div className='form-text'>
						<h5>Zarezerwuj</h5>
						<p>
							Prześlij mi niezbędne dane do rozpatrzenia Twojego zlecenia.
							Odezwę się do Ciebie w jak najszybszym terminie drogą mailową.
						</p>
					</div>
					<div className='contact-boxes'>
						<div className='left-side-form'>
							<div className='contact-box'>
								<label htmlFor='name'>Imię i nazwisko:</label>
								<input
									type='text'
									value={name}
									onChange={(e) => setName(e.target.value)}
									name='name'
									required
								></input>
							</div>
							<div className='contact-box'>
								<label htmlFor='email'>Twój adres e-mail:</label>
								<input
									type='email'
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									name='email'
									required
								></input>
							</div>
							<div className='contact-box'>
								<label htmlFor='phone'>Numer telefonu:</label>
								<input
									type='number'
									value={phone}
									onChange={(e) => setPhone(e.target.value)}
									name='phone'
									required
								></input>
							</div>
							<div className='contact-box'>
								<label htmlFor='postcode'>Kod pocztowy:</label>
								<input
									type='text'
									value={postcode}
									onChange={(e) => setPostcode(e.target.value)}
									name='postcode'
									required
								></input>
							</div>
						</div>
						<div className='right-side-form'>
							<div className='contact-box'>
								<label htmlFor='city'>Miasto:</label>
								<input
									type='text'
									value={city}
									onChange={(e) => setCity(e.target.value)}
									name='city'
									required
								></input>
							</div>
							<div className='contact-box'>
								<label htmlFor='address'>Ulica i numer mieszkania:</label>
								<input
									type='text'
									value={address}
									onChange={(e) => setAddress(e.target.value)}
									name='address'
									required
								></input>
							</div>
							<div className='contact-box'>
								<label htmlFor='msg'>Napisz swoje zlecenie:</label>
								<textarea
									name='msg'
									value={msg}
									onChange={(e) => setMsg(e.target.value)}
									required
								></textarea>
							</div>
						</div>
					</div>
					<button className='send' type='submit'>
						Wyślij{' '}
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='1em'
							height='1em'
							viewBox='0 0 24 24'
						>
							<path fill='currentColor' d='M3 20v-6l8-2l-8-2V4l19 8z' />
						</svg>
					</button>
				</form>
				{isLoading && (
					<div className='isloading'>
						<RingLoader
							color='#00b2ff'
							loading
							size={200}
							speedMultiplier={1}
						/>
					</div>
				)}
				{showPopup.show && (
					<div className='isloading'>
						<div className='popuptext'>
							<p className='bottom'>{showPopup.message}</p>
							<p>Okno zamknie się za: {countdown} sekund</p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
