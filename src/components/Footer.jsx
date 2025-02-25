import {
	FaChevronDown,
	FaFacebook,
	FaInstagram,
	FaLinkedin,
	FaTwitter,
} from 'react-icons/fa'

const Footer = () => {
	return (
		<footer className='bg-white/25 dark:bg-black/95 border-t border-t-gray-300 dark:border-t-gray-600  inset-0 z-50 backdrop-blur-md pt-12 pb-6 '>
			<div className='container w-[90%] mx-auto px-4'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
					<div className='space-y-4'>
						<div className='flex justify-between items-center md:block'>
							<h3 className='text-lg font-semibold mb-4 dark:text-white px-2'>
								Каталог
							</h3>
							<FaChevronDown className='md:hidden' />
						</div>
						<ul className={`space-y-2`}>
							<li className='dark:text-white font-body cursor-pointer transition-colors duration-200 dark:hover:text-blue-500 hover:bg-gray-400 rounded-md px-2 py-1 dark:hover:bg-black/70'>
								Одежда
							</li>
							<li className='dark:text-white font-body cursor-pointer transition-colors duration-200 dark:hover:text-blue-500 hover:bg-gray-400 rounded-md px-2 py-1 dark:hover:bg-black/70'>
								Обувь
							</li>
							<li className='dark:text-white font-body cursor-pointer transition-colors duration-200 dark:hover:text-blue-500 hover:bg-gray-400 rounded-md px-2 py-1 dark:hover:bg-black/70'>
								Аксессуары
							</li>
						</ul>
					</div>

					<div className='space-y-4'>
						<div className='flex justify-between items-center md:block'>
							<h3 className='text-lg font-semibold mb-4 dark:text-white px-2'>
								Информация
							</h3>
							<FaChevronDown className='md:hidden' />
						</div>
						<ul className={`space-y-2 `}>
							<li className='dark:text-white font-body cursor-pointer transition-colors duration-200 dark:hover:text-blue-500 hover:bg-gray-400 rounded-md px-2 py-1 dark:hover:bg-black/70'>
								Блог
							</li>
							<li className='dark:text-white font-body cursor-pointer transition-colors duration-200 dark:hover:text-blue-500 hover:bg-gray-400 rounded-md px-2 py-1 dark:hover:bg-black/70'>
								Доставка
							</li>
							<li className='dark:text-white font-body cursor-pointer transition-colors duration-200 dark:hover:text-blue-500 hover:bg-gray-400 rounded-md px-2 py-1 dark:hover:bg-black/70'>
								Расчет стоимости
							</li>
							<li className='dark:text-white font-body cursor-pointer transition-colors duration-200 dark:hover:text-blue-500 hover:bg-gray-400 rounded-md px-2 py-1 dark:hover:bg-black/70'>
								Оплата
							</li>
							<li className='dark:text-white font-body cursor-pointer transition-colors duration-200 dark:hover:text-blue-500 hover:bg-gray-400 rounded-md px-2 py-1 dark:hover:bg-black/70'>
								FAQ
							</li>
							<li className='dark:text-white font-body cursor-pointer transition-colors duration-200 dark:hover:text-blue-500 hover:bg-gray-400 rounded-md px-2 py-1 dark:hover:bg-black/70'>
								Контакты
							</li>
						</ul>
					</div>

					<div className='space-y-4'>
						<div className='flex justify-between items-center md:block'>
							<h3 className='text-lg font-semibold mb-4 dark:text-white px-2'>
								Контакты
							</h3>
							<FaChevronDown className='md:hidden' />
						</div>
						<div className={`space-y-4`}>
							<p className='dark:text-white font-body cursor-pointer transition-colors duration-200 dark:hover:text-blue-500 hover:bg-gray-400 rounded-md px-2 py-1 dark:hover:bg-black/70'>
								+998 00 000 00 00
							</p>
							<p className='dark:text-white font-body cursor-pointer transition-colors duration-200 dark:hover:text-blue-500 hover:bg-gray-400 rounded-md px-2 py-1 dark:hover:bg-black/70'>
								info@grafus.info
							</p>
							<div className='flex space-x-4'>
								<a
									href='#'
									className='text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
									aria-label='Facebook'
								>
									<FaFacebook size={24} />
								</a>
								<a
									href='#'
									className='text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
									aria-label='Twitter'
								>
									<FaTwitter size={24} />
								</a>
								<a
									href='#'
									className='text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
									aria-label='Instagram'
								>
									<FaInstagram size={24} />
								</a>
								<a
									href='#'
									className='text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
									aria-label='LinkedIn'
								>
									<FaLinkedin size={24} />
								</a>
							</div>
						</div>
					</div>

					
					<div className='space-y-4'>
						<h3 className='text-lg font-semibold mb-4 dark:text-white'>
							Будьте в курсе скидок и новостей
						</h3>
						<form className='space-y-4'>
							<div>
								<input
									type='email'
									placeholder='Ваш email'
									className='w-full px-4 py-2 rounded border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600'
									aria-label='Email subscription'
								/>
							</div>
							<button
								type='submit'
								className='w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors'
							>
								Подписаться
							</button>
							<p className='text-sm text-gray-500'>
								Подписываясь на рассылку вы соглашатесь с
								обработкой персональных данных
							</p>
						</form>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
