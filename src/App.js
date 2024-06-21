import React, { useState, useRef } from 'react';
export default function App() {
	return (
		<div className='App'>
			<Nav />
			<Header />
			<SummarySection />
			<Gallery />
			<DetailsSection />
			<Form />
			<Footer />
		</div>
	);
}

function Nav() {
	const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

	const toggleMobileNav = () => {
		setIsMobileNavOpen(!isMobileNavOpen);
	};

	const closeMobileNav = () => {
		setIsMobileNavOpen(false);
	};

	return (
		<nav className='nav'>
			<div className='wrapper'>
				<div className='nav-items'>
					<h1 className='mobile-h1'>ENDRU</h1>
					<div className='nav-details'>
						<a href='#gallery'>Projekty</a>
						<a href='#info'>Informacje</a>
						<h1 className='desktop-h1'>ENDRU</h1>
						<a href='#report'>Rezerwacje</a>
						<a href='#contact'>Kontakt</a>
					</div>

					<div
						className={`nav-details-mobile ${isMobileNavOpen ? 'open' : ''}`}
					>
						<a href='#gallery' onClick={closeMobileNav}>
							Projekty
						</a>
						<a href='#info' onClick={closeMobileNav}>
							Informacje
						</a>
						<a href='#report' onClick={closeMobileNav}>
							Rezerwacje
						</a>
						<a href='#contact' onClick={closeMobileNav}>
							Kontakt
						</a>
					</div>

					<div className='burger-menu' onClick={toggleMobileNav}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='1em'
							height='1em'
							viewBox='0 0 24 24'
						>
							<path
								fill='currentColor'
								d='M3 4h18v2H3zm0 7h18v2H3zm0 7h18v2H3z'
							/>
						</svg>
					</div>
				</div>
			</div>
		</nav>
	);
}

function Header() {
	return (
		<div className='header-area'>
			<div className='header-text'>
				<h2>Stworzymy Ci twoje wymarzone pomieszczenie</h2>
				<div className='header-info'>
					<p>1000 wykonanych zleceń</p>
					<p>Elastyczność terminów</p>
				</div>
				<button className='header-btn'>
					Wyślij zgłoszenie
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='1em'
						height='1em'
						viewBox='0 0 24 24'
					>
						<path fill='currentColor' d='M3 20v-6l8-2l-8-2V4l19 8z' />
					</svg>
				</button>
			</div>
			<div className='hero-img'></div>
		</div>
	);
}

function SummarySection() {
	return (
		<div className='wrapper'>
			<div className='summary-section'>
				<div className='summary-experience summary'>
					<p>30 lat</p>
					<p>doświadczenia</p>
				</div>
				<div className='summary-info summary'>
					<p>Kreatywne rozwiązania.</p>
					<p>Meble na wymiar.</p>
					<p>Meble na zamówienie.</p>
				</div>
				<div className='summary-description summary'>
					<p>
						Specjalizujemy się w projektowaniu i produkcji niestandardowych
						mebli, dostosowanych do potrzeb klientów. Oferujemy wysoką jakość i
						kreatywne podejście.
					</p>
				</div>
			</div>
		</div>
	);
}

const images = [
	`src/images/0a4eb696-b19a-411f-869c-07b685f4a0be.jpg`,
	'https://via.placeholder.com/300x200?text=Image+2',
	'https://via.placeholder.com/300x200?text=Image+3',
	'https://via.placeholder.com/300x200?text=Image+4',
	'https://via.placeholder.com/300x200?text=Image+5',
	'https://via.placeholder.com/300x200?text=Image+6',
	'https://via.placeholder.com/300x200?text=Image+7',
	'https://via.placeholder.com/300x200?text=Image+8',
	'https://via.placeholder.com/300x200?text=Image+9',
	'https://via.placeholder.com/300x200?text=Image+10',
];

function Gallery() {
	const galleryRef = useRef(null);
	const [isDragging, setIsDragging] = useState(false);
	const [startX, setStartX] = useState(0);
	const [scrollLeft, setScrollLeft] = useState(0);

	const onMouseDown = (e) => {
		setIsDragging(true);
		setStartX(e.pageX - galleryRef.current.offsetLeft);
		setScrollLeft(galleryRef.current.scrollLeft);
	};

	const onMouseMove = (e) => {
		if (!isDragging) return;
		e.preventDefault();
		const x = e.pageX - galleryRef.current.offsetLeft;
		const walk = (x - startX) * 2; // scroll-fast
		galleryRef.current.scrollLeft = scrollLeft - walk;
	};

	const onMouseUp = () => {
		setIsDragging(false);
	};

	const onMouseLeave = () => {
		setIsDragging(false);
	};

	return (
		<div
			className='gallery-container'
			ref={galleryRef}
			onMouseDown={onMouseDown}
			onMouseMove={onMouseMove}
			onMouseUp={onMouseUp}
			onMouseLeave={onMouseLeave}
		>
			<div className='gallery'>
				{images.map((image, index) => (
					<div key={index} className='gallery-item'>
						<img src={image} alt={`Image ${index + 1}`} />
					</div>
				))}
			</div>
		</div>
	);
}

// function Gallery() {
// 	return (
// 		<div className='gallery' id='gallery'>
// 			<div className='gallery-box'>
// 				<div className='gallery-img'>
// 					<div className='shadow'></div>
// 					<img
// 						src='https://coolwallpapers.me/th700/6003335-table-interior-room-kitchen-kitchen-paintings-sofa.jpg'
// 						alt='first'
// 					/>
// 				</div>
// 			</div>
// 			<div className='gallery-box'>
// 				<div className='gallery-img'>
// 					<div className='shadow'></div>
// 					<img
// 						src='https://coolwallpapers.me/picsup/2639139-kitchen-4k-high-quality-wallpaper-hd.jpg'
// 						alt='first'
// 					/>
// 				</div>
// 			</div>
// 			<div className='gallery-box'>
// 				<div className='gallery-img'>
// 					<div className='shadow'></div>
// 					<img
// 						src='https://coolwallpapers.me/th700/6006247-kitchen-style-interior-white-design-furniture-design-white-kitchen.jpg'
// 						alt='first'
// 					/>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

function DetailsSection() {
	return (
		<div className='wrapper'>
			<div className='details-section' id='info'>
				<div className='details-main'>
					<p>Dlaczego my?</p>
					<h3>
						Pracujemy w zawodzie ponad 30 lat i wyróżniamy się wysokim
						doświadczeniem.
					</h3>
				</div>
				<div className='details-area'>
					<div className='detail'>
						<div className='detail-circle'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='1em'
								height='1em'
								viewBox='0 0 256 256'
							>
								<path
									fill='currentColor'
									d='M128 166a38 38 0 1 0-38-38a38 38 0 0 0 38 38m0-64a26 26 0 1 1-26 26a26 26 0 0 1 26-26m112-44H16a6 6 0 0 0-6 6v128a6 6 0 0 0 6 6h224a6 6 0 0 0 6-6V64a6 6 0 0 0-6-6M22 108.82A54.73 54.73 0 0 0 60.82 70h134.36A54.73 54.73 0 0 0 234 108.82v38.36A54.73 54.73 0 0 0 195.18 186H60.82A54.73 54.73 0 0 0 22 147.18Zm212-12.53A42.8 42.8 0 0 1 207.71 70H234ZM48.29 70A42.8 42.8 0 0 1 22 96.29V70ZM22 159.71A42.8 42.8 0 0 1 48.29 186H22ZM207.71 186A42.8 42.8 0 0 1 234 159.71V186Z'
								/>
							</svg>
						</div>
						<h4 className='detail-title'>Niskie ceny</h4>
						<p className='detail-description'>
							Oferuję konkurencyjne ceny w produkcji mebli, nie rezygnując z
							wysokiej jakości wykonania. Dzięki wieloletniemu doświadczeniu i
							sprawdzonym metodom produkcji, mogę optymalizować koszty bez
							kompromisów w kwestii trwałości i estetyki. Korzystam z lokalnych
							dostawców materiałów, co dodatkowo obniża koszty transportu i
							surowców. Wykorzystuję nowoczesne technologie i efektywne procesy
							produkcyjne, co pozwala na ograniczenie strat i zwiększenie
							wydajności. Dążę do zapewnienia klientom wartościowych,
							funkcjonalnych mebli w przystępnych cenach, niezależnie od skali
							zamówienia. Moje podejście pozwala na realizację wysokiej jakości
							projektów w ramach budżetu klienta.
						</p>
					</div>
					<div className='detail'>
						<div className='detail-circle'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='1em'
								height='1em'
								viewBox='0 0 24 24'
							>
								<path
									fill='currentColor'
									d='M18 22v-3h-3v-1h3v-3h1v3h3v1h-3v3zM3.23 19.5v-6H2v-1l1.154-5h13.692l1.154 5v1h-1.23v3.27h-1V13.5h-4.54v6zm1-1h6v-5h-6zm-1.218-6h13.976zm.142-7v-1h13.692v1zm-.142 7h13.976l-.926-4H3.938z'
								/>
							</svg>
						</div>
						<h4 className='detail-title'>Meble na wymiar</h4>
						<div className='detail-description'>
							<p>Szafy </p>
							<p>Szafy wbudowane </p>
							<p>Garderoby </p>
							<p>Kuchnie </p>
							<p>Lazienki pod zabudowe </p>
						</div>
					</div>
					<div className='detail'>
						<div className='detail-circle'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='1em'
								height='1em'
								viewBox='0 0 48 48'
							>
								<g
									fill='none'
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='4'
								>
									<circle cx='24' cy='12' r='8' />
									<path d='M42 44c0-9.941-8.059-18-18-18S6 34.059 6 44' />
									<path d='m24 44l4-5l-4-13l-4 13z' />
								</g>
							</svg>
						</div>
						<h4 className='detail-title'>Doświadczenie</h4>
						<p className='detail-description'>
							Od 30 lat specjalizuję się w stolarstwie meblowym, zaczynając jako
							uczeń u doświadczonego mistrza. Przez dekady doskonaliłem
							umiejętności w tworzeniu mebli na zamówienie, projektując zarówno
							klasyczne, jak i nowoczesne rozwiązania. Moje doświadczenie
							obejmuje precyzyjną produkcję nowych mebli, takich jak szafy i
							kuchnie itp. W pracy łączę tradycyjne techniki z nowoczesnymi
							narzędziami, kładąc nacisk na każdy detal i jakość wykonania.
							Współpracowałem z klientami indywidualnymi oraz firmami, zawsze
							stawiając na trwałość i estetykę. Stolarstwo to moja pasja, którą
							przekształcam w unikalne, funkcjonalne i piękne meble, służące
							przez lata.
						</p>
					</div>
					<div className='detail'>
						<div className='detail-circle'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='1em'
								height='1em'
								viewBox='0 0 36 36'
							>
								<path
									fill='currentColor'
									d='m33.71 17.29l-15-15a1 1 0 0 0-1.41 0l-15 15a1 1 0 0 0 1.41 1.41L18 4.41l14.29 14.3a1 1 0 0 0 1.41-1.41Z'
									class='clr-i-outline clr-i-outline-path-1'
								/>
								<path
									fill='currentColor'
									d='M28 32h-5V22H13v10H8V18l-2 2v12a2 2 0 0 0 2 2h7V24h6v10h7a2 2 0 0 0 2-2V19.76l-2-2Z'
									class='clr-i-outline clr-i-outline-path-2'
								/>
								<path fill='none' d='M0 0h36v36H0z' />
							</svg>
						</div>
						<h4 className='detail-title'>Elastyczność</h4>
						<p className='detail-description'>
							Elastyczność w terminach produkcji mebli jest kluczowym elementem
							mojej działalności stolarskiej. Dzięki wieloletniemu doświadczeniu
							i dobrze zorganizowanemu warsztatowi potrafię dostosować się do
							potrzeb klienta i zmieniających się harmonogramów. Realizuję
							projekty zarówno w trybie standardowym, jak i przyspieszonym,
							zawsze dbając o najwyższą jakość. Współpracuję ściśle z klientami,
							aby ustalić realistyczne terminy i elastycznie reagować na
							ewentualne zmiany. Moja elastyczność pozwala na terminową
							realizację zamówień. Dzięki temu klienci mogą liczyć na rzetelne
							wykonanie mebli w uzgodnionym czasie, niezależnie od złożoności
							projektu.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

function Form() {
	return (
		<div className='wrapper'>
			<div className='form-wrapper' id='report'>
				<form action='mail.php' method='post' className='form'>
					<div className='form-text'>
						<h5>Zarezerwuj</h5>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua..
						</p>
					</div>
					<div className='contact-boxes'>
						<div className='left-side-form'>
							<div className='contact-box'>
								<label for='name'>Imię i nazwisko</label>
								<input type='text' id='name' name='name' required></input>
							</div>
							<div className='contact-box'>
								<label for='email'>Twój adres e-mail</label>
								<input type='email' id='email' name='email' required></input>
							</div>
							<div className='contact-box'>
								<label for='phone'>Numer telefonu</label>
								<input type='number' id='phone' name='phone' required></input>
							</div>
							<div className='contact-box'>
								<label for='postcode'>Kod pocztowy</label>
								<input
									type='text'
									id='postcode'
									name='postcode'
									required
								></input>
							</div>
						</div>
						<div className='right-side-form'>
							<div className='contact-box'>
								<label for='city'>Miasto</label>
								<input type='city' id='city' name='city' required></input>
							</div>
							<div className='contact-box'>
								<label for='address'>Ulica i numer mieszkania</label>
								<input
									type='address'
									id='address'
									name='address'
									required
								></input>
							</div>
							<div className='contact-box'>
								<label for='msg'>Napisz swoje zlecenie</label>
								<textarea name='msg' id='msg' required></textarea>
							</div>
						</div>
					</div>
					<button className='send'>
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
			</div>
		</div>
	);
}

function Footer() {
	return (
		<div className='footer' id='contact'>
			<div className='wrapper'>
				<div className='footer-area'>
					<h1>ENDRU</h1>
					<div className='footer-contact'>
						<div className='contact'>
							<div className='contact-title'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='1em'
									height='1em'
									viewBox='0 0 24 24'
								>
									<path
										fill='currentColor'
										d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z'
									/>
								</svg>
								<p>E-mail</p>
							</div>
							<p>andrzejkosnik@gmail.com</p>
						</div>
						<div className='contact'>
							<div className='contact-title'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='1em'
									height='1em'
									viewBox='0 0 24 24'
								>
									<path
										fill='currentColor'
										d='M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7'
									/>
								</svg>
								<p>Lokalizacja</p>
							</div>
							<p>07-130 Łochów, Szkolna 11</p>
						</div>
						<div className='contact'>
							<div className='contact-title'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='1em'
									height='1em'
									viewBox='0 0 24 24'
								>
									<path
										fill='currentColor'
										d='M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z'
									/>
								</svg>
								<p>Telefon</p>
							</div>
							<p>+48 662 131 525</p>
						</div>
					</div>
					<div className='footer-social'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='1em'
							height='1em'
							viewBox='0 0 24 24'
						>
							<path
								fill='currentColor'
								d='M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95'
							/>
						</svg>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='1em'
							height='1em'
							viewBox='0 0 24 24'
						>
							<path
								fill='currentColor'
								d='M13.028 2c1.125.003 1.696.009 2.189.023l.194.007c.224.008.445.018.712.03c1.064.05 1.79.218 2.427.465c.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.012.266.022.487.03.712l.006.194c.015.492.021 1.063.023 2.188l.001.746v1.31a78.831 78.831 0 0 1-.023 2.188l-.006.194c-.008.225-.018.446-.03.712c-.05 1.065-.22 1.79-.466 2.428a4.883 4.883 0 0 1-1.153 1.772a4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465a72.11 72.11 0 0 1-.712.03l-.194.006c-.493.014-1.064.021-2.189.023l-.746.001h-1.309a78.43 78.43 0 0 1-2.189-.023l-.194-.006a63.036 63.036 0 0 1-.712-.031c-1.064-.05-1.79-.218-2.428-.465a4.889 4.889 0 0 1-1.771-1.153a4.904 4.904 0 0 1-1.154-1.772c-.247-.637-.415-1.363-.465-2.428a74.1 74.1 0 0 1-.03-.712l-.005-.194A79.047 79.047 0 0 1 2 13.028v-2.056a78.82 78.82 0 0 1 .022-2.188l.007-.194c.008-.225.018-.446.03-.712c.05-1.065.218-1.79.465-2.428A4.88 4.88 0 0 1 3.68 3.678a4.897 4.897 0 0 1 1.77-1.153c.638-.247 1.363-.415 2.428-.465c.266-.012.488-.022.712-.03l.194-.006a79 79 0 0 1 2.188-.023zM12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10m0 2a3 3 0 1 1 .001 6a3 3 0 0 1 0-6m5.25-3.5a1.25 1.25 0 0 0 0 2.5a1.25 1.25 0 0 0 0-2.5'
							/>
						</svg>
					</div>
				</div>
			</div>
		</div>
	);
}
