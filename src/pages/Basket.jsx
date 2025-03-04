import { StarIcon, TrashIcon } from 'lucide-react'
import { useContext, useState } from 'react'
import { FiMinus } from 'react-icons/fi'
import { GoPlus } from 'react-icons/go'
import { MdSentimentDissatisfied } from 'react-icons/md'
import { toast, ToastContainer } from 'react-toastify'
import { CardContext } from '../Context/ContextProvider'

const Basket = () => {
	const [favorite, setFavorite] = useState(false)
	const { card, handleDecrease, handleIncrease, deleteHandle } =
		useContext(CardContext)

	const getAllsum = () => {
		let summ = 0
		card.forEach(element => {
			summ += element?.count * element.price
		})
		return summ
	}

	const toggleFavorite = () => setFavorite(!favorite)
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		phone: '',
		city: '',
		street: '',
		houseNumber: '',
		apartment: '',
		courierNote: '',
	})

	const cities = [
		'Tashkent',
		'Andijan',
		'Bukhara',
		'Fergana',
		'Jizzakh',
		'Namangan',
		'Navoi',
		'Nukus',
		'Samarkand',
		'Sirdaryo',
		'Surkhandarya',
		'Khorezm',
	]

	const handleChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const handleSubmit = e => {
		e.preventDefault()

		toast.success('Buyurtma rasmiylashtirildi!', {
			position: 'top-center',
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			theme: 'colored',
			onClose: () => window.location.reload(),
		})
	}

	if (card.length == 0) {
		return (
			<div className='py-65 bg-white/25 dark:bg-black/95'>
				<p className='dark:text-white flex items-center justify-center text-2xl'>
					<p>Savatchangiz hozircha bosh.</p>
					<MdSentimentDissatisfied className='text-gray-400 text-4xl' />
				</p>
			</div>
		)
	}

	return (
		<div className='py-20 bg-white/25 dark:bg-black/95'>
			<ToastContainer />
			<div className='container w-[90%] mx-auto'>
				<div className='grid grid-cols-4 w-full'>
					<div className='col-span-2 '>
						{card?.map((product, index) => {
							return (
								<div
									key={card?.id}
									className=' my-2 px-5 py-2 mx-auto  h-50 bg-gray-50 dark:bg-gray-800 hover:shadow-lg rounded-lg flex justify-between items-center '
								>
									<div className='w-40 h-40 flex-shrink-0 border border-black/15 rounded-md overflow-hidden bg-white'>
										<img
											src={product.thumbnail}
											alt='Product'
											className='w-full h-full object-cover'
										/>
									</div>
									<div className='flex flex-col justify-evenly w-80'>
										<h3 className='text-lg font-semibold text-gray-900 dark:text-white '>
											{product.title}
										</h3>
										<p className='text-gray-500 dark:text-gray-300'>
											Category:{' '}
											<span className='text-black dark:text-white '>
												{product?.category}
											</span>
										</p>
										<div className='flex items-center gap-2 mt-2'>
											<button
												onClick={() => {
													handleDecrease(index)
												}}
												className='p-2 rounded-md bg-gray-100 dark:bg-gray-700'
											>
												<FiMinus className=' dark:text-white cursor-pointer' />
											</button>
											<span className='text font-semibold text-gray-900 dark:text-white'>
												{product?.count}
											</span>
											<button
												onClick={() => {
													handleIncrease(index)
												}}
												className='p-2 cursor-pointer rounded-md bg-gray-100 dark:bg-gray-700'
											>
												<GoPlus className=' dark:text-white' />
											</button>
										</div>
										<div className='flex flex-col gap-2'>
											<p className='text-gray-400 line-through'>
												50 $
											</p>
											<p className='text-lg font-bold text-gray-900 dark:text-white'>
												{product?.price} $
											</p>
										</div>
									</div>

									<div className='flex flex-col gap-22'>
										<button
											onClick={toggleFavorite}
											className='p-1 border rounded-md border-black/15 dark:border-white/35'
										>
											<p className='flex gap-2 dark:text-white'>
												Saralangan
												<StarIcon
													className={`w-6 h-6 ${
														favorite
															? 'text-yellow-500'
															: 'text-gray-400'
													}`}
												/>
											</p>
										</button>
										<button
											onClick={() => {
												deleteHandle(index)
											}}
											className='p-1 border rounded-md border-black/15 dark:border-white/35'
										>
											<p className='flex gap-2 items-center justify-center dark:text-white'>
												O`chirish{' '}
												<TrashIcon className='w-auto text-red-500 ' />
											</p>
										</button>
									</div>
								</div>
							)
						})}
						<p className='text-2xl font-mono font-bold text-center dark:text-white'>
							Итого {getAllsum()}
						</p>
					</div>

					<div className='col-span-2'>
						<div className='max-w-xl mx-auto p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg'>
							<h2 className='text-2xl font-bold mb-6 text-black dark:text-white'>
								Oформление заказа
							</h2>
							<form onSubmit={handleSubmit} className='space-y-4'>
								<div className='grid grid-cols-2 gap-4'>
									<input
										type='text'
										name='firstName'
										placeholder='Имя'
										value={formData.firstName}
										onChange={handleChange}
										required
										className='w-full p-2 border rounded bg-white dark:bg-gray-700 text-black dark:text-white'
									/>
									<input
										type='text'
										name='lastName'
										placeholder='Фамилия'
										value={formData.lastName}
										onChange={handleChange}
										required
										className='w-full p-2 border rounded bg-white dark:bg-gray-700 text-black dark:text-white'
									/>
								</div>
								<input
									type='tel'
									name='phone'
									placeholder='Телефон'
									value={formData.phone}
									onChange={handleChange}
									required
									className='w-full p-2 border rounded bg-white dark:bg-gray-700 text-black dark:text-white'
								/>

								<h3 className='text-xl font-semibold mt-4 text-black dark:text-white'>
									Доставка
								</h3>
								<select
									name='city'
									value={formData.city}
									onChange={handleChange}
									required
									className='w-full p-2 border rounded bg-white dark:bg-gray-700 text-black dark:text-white'
								>
									<option value=''>Выберите город</option>
									{cities.map((city, index) => (
										<option key={index} value={city}>
											{city}
										</option>
									))}
								</select>
								<input
									type='text'
									name='street'
									placeholder='Улица'
									value={formData.street}
									onChange={handleChange}
									required
									className='w-full p-2 border rounded bg-white dark:bg-gray-700 text-black dark:text-white'
								/>

								<div className='grid grid-cols-2 gap-4'>
									<input
										type='text'
										name='houseNumber'
										placeholder='Дом'
										value={formData.houseNumber}
										onChange={handleChange}
										required
										className='w-full p-2 border rounded bg-white dark:bg-gray-700 text-black dark:text-white'
									/>
									<input
										type='text'
										name='apartment'
										placeholder='Квартира/офис'
										value={formData.apartment}
										onChange={handleChange}
										className='w-full p-2 border rounded bg-white dark:bg-gray-700 text-black dark:text-white'
									/>
								</div>

								<textarea
									name='courierNote'
									placeholder='Комментарий для курьера'
									value={formData.courierNote}
									onChange={handleChange}
									className='w-full p-2 border rounded bg-white dark:bg-gray-700 text-black dark:text-white'
								></textarea>

								<button
									type='submit'
									className='w-full bg-blue-600 dark:bg-blue-500 text-white p-2 rounded hover:bg-blue-700 dark:hover:bg-blue-600'
								>
									Оформить заказ
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Basket
