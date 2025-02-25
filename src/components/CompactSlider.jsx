import { useEffect, useRef, useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { SliderIMG } from '../assets'

const CompactSlider = () => {
	const slides = [
		{
			id: 4,
			image: `${SliderIMG}`,
			description:
				'Одежда от известные брендов у нас в каталоге. Только качественные вещи.',
		},
		{
			id: 1,
			image: 'https://hips.hearstapps.com/hmg-prod/images/business-opening-with-open-sign-royalty-free-image-1573142427.jpg?crop=1xw:0.84256xh;center,top&resize=1200:*',
			description:
				'Одежда от известные брендов у нас в каталоге. Только качественные вещи.',
		},
		{
			id: 2,
			image: 'https://theculturetrip.com/wp-content/uploads/2016/08/thanx-god-im-a-v-i-p--store---amnaye-nhas-courtesy-of-thanx-god-im-a-v-i-p-.jpg',
			description:
				'Одежда от известные брендов у нас в каталоге. Только качественные вещи.',
		},
		{
			id: 3,
			image: 'https://blog.yelp.com/wp-content/uploads/2022/11/Photo-by-Clark-Street-Mercantile.jpg',
			description:
				'Одежда от известные брендов у нас в каталоге. Только качественные вещи.',
		},
		{
			id: 5,
			image: 'https://c8.alamy.com/comp/2A7XW9F/shenzhen-china-circa-april-2019-sport-shoes-on-display-at-adidas-store-in-shenzhen-2A7XW9F.jpg',
			description:
				'Одежда от известные брендов у нас в каталоге. Только качественные вещи.',
		},
	]

	const [currentIndex, setCurrentIndex] = useState(0)
	const [isAutoPlaying, setIsAutoPlaying] = useState(true)

	const sliderRef = useRef(null)

	useEffect(() => {
		let interval
		if (isAutoPlaying) {
			interval = setInterval(() => {
				nextSlide()
			}, 3000)
		}
		return () => clearInterval(interval)
	}, [currentIndex, isAutoPlaying])

	const nextSlide = () => {
		setCurrentIndex(prevIndex =>
			prevIndex === slides.length - 1 ? 0 : prevIndex + 1
		)
	}

	const prevSlide = () => {
		setCurrentIndex(prevIndex =>
			prevIndex === 0 ? slides.length - 1 : prevIndex - 1
		)
	}

	return (
		<div className='max-w-6xl mx-auto px-4 py-8'>
			<div
				className='relative overflow-hidden rounded-lg shadow-lg'
				ref={sliderRef}
				tabIndex={0}
				role='region'
				aria-label='Image Slider'
			>
				{' '}
				<div className='absolute top-2 left-16 flex flex-col items-center justify-center w-[400px] h-[250px] bg-white/45 dark:bg-white/35 rounded-lg inset-0 z-20 backdrop-blur-md'>
					<p className='text-5xl font-bold p-2 text-center'>
						Широкий ассортимент Одежды
					</p>
					<p className='text-center'>
						Одежда от известные брендов у нас в каталоге. Только
						качественные вещи.
					</p>
				</div>
				<div className='absolute top-96 left-5 flex flex-col items-center justify-center w-[300px] h-[50px] bg-white/45 dark:bg-white/35 rounded-lg inset-0 z-20 backdrop-blur-md'>
					<p className='text-2xl font-bold'>Перейти в каталог</p>
				</div>
				<div className='relative h-[500px]'>
					{slides.map((slide, index) => (
						<div
							key={slide.id}
							className={`absolute w-full h-full transition-opacity duration-500 ${
								index === currentIndex
									? 'opacity-100'
									: 'opacity-0'
							}`}
						>
							<img
								src={slide.image}
								alt={slide.title}
								className='w-full h-full object-cover'
								loading='lazy'
							/>
							<div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-6'>
								<h2 className='text-gray-100 text-2xl font-bold mb-2'>
									{slide.title}
								</h2>
								<p className='text-gray-300'>
									{slide.description}
								</p>
							</div>
						</div>
					))}
				</div>
				<button
					onClick={prevSlide}
					className='absolute left-4 top-1/2 -translate-y-1/2 bg-gray-200/30 hover:bg-gray-200/50 p-2 rounded-full backdrop-blur-sm transition-all'
					aria-label='Previous slide'
				>
					<FiChevronLeft className='w-6 h-6 text-gray-100' />
				</button>
				<button
					onClick={nextSlide}
					className='absolute right-4 top-1/2 -translate-y-1/2 bg-gray-200/30 hover:bg-gray-200/50 p-2 rounded-full backdrop-blur-sm transition-all'
					aria-label='Next slide'
				>
					<FiChevronRight className='w-6 h-6 text-gray-100' />
				</button>
				<div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2'>
					{slides.map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentIndex(index)}
							className={`w-3 h-3 rounded-full transition-all ${
								index === currentIndex
									? 'bg-gray-100'
									: 'bg-gray-300'
							}`}
							aria-label={`Go to slide ${index + 1}`}
						/>
					))}
				</div>
				<button
					onClick={() => setIsAutoPlaying(!isAutoPlaying)}
					className='absolute top-4 right-4 bg-gray-200/30 hover:bg-gray-200/50 px-4 py-2 rounded-full backdrop-blur-sm transition-all text-gray-100 text-sm'
					aria-label={
						isAutoPlaying ? 'Pause autoplay' : 'Start autoplay'
					}
				>
					{isAutoPlaying ? 'Pause' : 'Play'}
				</button>
			</div>
		</div>
	)
}

export default CompactSlider
