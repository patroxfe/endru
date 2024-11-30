import React, { useState, useEffect } from 'react'
import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
import img4 from './images/img4.jpg'
import img5 from './images/img5.jpg'
import img6 from './images/img6.jpg'
import img7 from './images/img7.jpg'
import img8 from './images/img8.jpg'
import img9 from './images/img9.jpg'
import img10 from './images/img10.jpg'
import img11 from './images/img11.jpg'
import img12 from './images/img12.jpg'
import img13 from './images/img13.jpg'
import img14 from './images/img14.jpg'
import img15 from './images/img15.jpg'
import img16 from './images/img16.jpg'
import img17 from './images/img17.jpg'
import img18 from './images/img18.jpg'
import img19 from './images/img19.jpg'
import img20 from './images/img20.jpg'
import img21 from './images/img21.jpg'
import img22 from './images/img22.jpg'
import img23 from './images/img23.jpg'
import img24 from './images/img24.jpg'
import img25 from './images/img25.jpg'
import img26 from './images/img26.jpg'
import img27 from './images/img27.jpg'
import img28 from './images/img28.jpg'
import img29 from './images/img29.jpg'
import img30 from './images/img30.jpg'
import img31 from './images/img31.jpg'
import img32 from './images/img32.jpg'
import img33 from './images/img33.jpg'
import img34 from './images/img34.jpg'
import img35 from './images/img35.jpg'
import img36 from './images/img36.jpg'
import img37 from './images/img37.jpg'
import img38 from './images/img38.jpg'
import img39 from './images/img39.jpg'
import img40 from './images/img40.jpg'
import img41 from './images/img41.jpg'
import img42 from './images/img42.jpg'
import img43 from './images/img43.jpg'
import img44 from './images/img44.jpg'
import img45 from './images/img45.jpg'
import img46 from './images/img46.jpg'
import img47 from './images/img47.jpg'
import img48 from './images/img48.jpg'
import img49 from './images/img49.jpg'
import img50 from './images/img50.jpg'
import img51 from './images/img51.jpg'
import img52 from './images/img52.jpg'
import img53 from './images/img53.jpg'
import img54 from './images/img54.jpg'
import img55 from './images/img55.jpg'
import img56 from './images/img56.jpg'

const images = [
	img1,
	img2,
	img3,
	img4,
	img5,
	img6,
	img7,
	img8,
	img9,
	img10,
	img11,
	img12,
	img13,
	img14,
	img15,
	img16,
	img17,
	img18,
	img19,
	img20,
	img21,
	img22,
	img23,
	img24,
	img25,
	img26,
	img27,
	img28,
	img29,
	img30,
	img31,
	img32,
	img33,
	img34,
	img35,
	img36,
	img37,
	img38,
	img39,
	img40,
	img41,
	img42,
	img43,
	img44,
	img45,
	img46,
	img47,
	img48,
	img49,
	img50,
	img51,
	img52,
	img53,
	img54,
	img55,
	img56,
]

const IMAGES_PER_PAGE = 9

function NewPage() {
	const [currentPage, setCurrentPage] = useState(1)
	const [currentImages, setCurrentImages] = useState([])
	const [selectedImage, setSelectedImage] = useState(null)

	useEffect(() => {
		const startIndex = (currentPage - 1) * IMAGES_PER_PAGE
		const endIndex = startIndex + IMAGES_PER_PAGE
		setCurrentImages(images.slice(startIndex, endIndex))
	}, [currentPage])

	const totalPages = Math.ceil(images.length / IMAGES_PER_PAGE)

	const handleImageClick = img => {
		setSelectedImage(img)
	}

	const handleCloseModal = () => {
		setSelectedImage(null)
	}

	const renderImages = () => {
		return currentImages.map((img, index) => (
			<div key={index} className='image-container' onClick={() => handleImageClick(img)}>
				<img src={img} alt={`img-${index}`} className='gallery-image' />
			</div>
		))
	}

	return (
		<div className='new-page'>
			<h2 className='gallery-title'>Galeria wykonanych prac</h2>
			<div className='pagination'>
				<button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
					Poprzednia
				</button>
				<span className='page-info'>
					{currentPage} / {totalPages}
				</span>
				<button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
					Następna
				</button>
			</div>
			<div className='wrapper'>
				<div className='gallery-wrapper'>{renderImages()}</div>
			</div>
			<div className='pagination'>
				<button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
					Poprzednia
				</button>
				<span className='page-info'>
					{currentPage} / {totalPages}
				</span>
				<button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
					Następna
				</button>
			</div>

			{/* Modal for enlarged image */}
			{selectedImage && (
				<div className='modal' onClick={handleCloseModal}>
					<div className='modal-content' onClick={e => e.stopPropagation()}>
						<img src={selectedImage} alt='Enlarged' className='modal-image' />
						<button className='modal-close' onClick={handleCloseModal}>
							X
						</button>
					</div>
				</div>
			)}
		</div>
	)
}

export default NewPage
