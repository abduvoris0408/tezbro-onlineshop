import { useContext, useEffect, useState } from 'react'
import { BiLike } from 'react-icons/bi'
import { FaChevronRight, FaRegStar } from 'react-icons/fa'
import { IoSearch } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import CompactSlider from '../components/CompactSlider'
import 'react-toastify/dist/ReactToastify.css'
import { CardContext } from '../Context/ContextProvider'
import { apiClient } from '../utils/apiservice'

const Clothes = () => {
	const [data, setData] = useState([])
	const [searchQuery, setSearchQuery] = useState('')
	const [loading, setLoading] = useState(false)
	const { pushCart } = useContext(CardContext)

	const getProducts = async (query = '') => {
		setLoading(true)
		try {
			let url = query ? `/products/search?q=${query}` : '/products'
			let res = await apiClient({ url })
			if (res?.status === 200) {
				setData(res?.data.products)
			} else {
				setData([])
			}
		} catch (error) {
			console.error('Xatolik yuz berdi:', error)
			setData([])
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		getProducts(searchQuery)
	}, [searchQuery])

	useEffect(() => {
		getProducts()
	}, [])

	return (
		<div className='pt-18 bg-white/25 dark:bg-black/95'>
			<ToastContainer />
			<CompactSlider />
			<div className='container w-[90%] mx-auto'>
				<div className='flex items-center justify-between'>
					<p className='uppercase dark:text-white text-2xl font-bold hover:text-blue-500'>
						Все товары
					</p>

					<div className='flex items-center justify-between w-full max-w-md mx-auto py-2 px-3 dark:bg-black/10 rounded-full shadow-lg border dark:border-gray-400'>
						<input
							type='text'
							placeholder='Поиск товаров...'
							className='flex px-2 border-none focus:ring-0 focus:outline-none dark:text-gray-200'
							value={searchQuery}
							onChange={e => setSearchQuery(e.target.value)}
						/>
						<IoSearch className='dark:text-white' />
					</div>

					<p className='dark:text-white uppercase border-b py-2 text-black flex items-center gap-1 hover:text-blue-500 cursor-pointer'>
						больше товаров
						<FaChevronRight />
					</p>
				</div>
			</div>
			{loading ? (
				<div className='flex justify-center items-center py-16'>
					<div className='w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin'></div>
				</div>
			) : data.length === 0 ? (
				<div className='flex justify-center items-center py-16 text-2xl font-bold text-gray-500'>
					Not Found Data
				</div>
			) : (
				<div className='grid grid-cols-4 gap-4 w-7xl mx-auto py-8'>
					{data.map(item => (
						<div key={item?.id}>
							<div className='w-74 h-100 border rounded-xl border-black/20 cursor-pointer flex flex-col p-3 gap-2 shadow-lg bg-gray-50 dark:hover:shadow-2xl dark:hover:shadow-blue-500 dark:border-black dark:bg-black'>
								<Link to={`./clothes-detail/${item?.id}`}>
									<img
										className='w-68 h-60 object-cover rounded-xl shadow-md flex'
										src={item?.images}
										alt=''
									/>
								</Link>
								<div className='flex justify-between p-1'>
									<div>
										<p className='w-[95%] h-[50px] overflow-hidden dark:text-white'>
											{item?.title}
										</p>
										<p className='uppercase mt-2 dark:text-gray-100 font-bold font-mono'>
											цена: {item?.price} $
										</p>
									</div>
									<div className='flex gap-2 '>
										<BiLike className='text-xl dark:text-white hover:bg-gray-300 rounded-md dark:hover:bg-gray-800' />
										<FaRegStar className='text-xl dark:text-white hover:bg-gray-300 rounded-md dark:hover:bg-gray-800' />
									</div>
								</div>
								<button
									onClick={() => {
										pushCart(item)

										toast.success(
											'Buyurtma savatchaga qo‘shildi! ',
											{
												position: 'top-center',
												autoClose: 3000,
												hideProgressBar: false,
												closeOnClick: true,
												pauseOnHover: true,
												draggable: true,
												theme: 'colored',
											}
										)
									}}
									className='px-2 py-1 bg-blue-400 rounded-md text-white cursor-pointer active:bg-blue-600'
								>
									Добавить в корзину
								</button>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export default Clothes
