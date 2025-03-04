import { useContext, useEffect, useState } from 'react'
import { BiLike } from 'react-icons/bi'
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs'
import { FaRegStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { CardContext } from '../Context/ContextProvider'
import { apiClient } from '../utils/apiservice'

const CategoryDetails = () => {
	const { pushCart } = useContext(CardContext)

	const [data, setData] = useState([])
	const [categories, setCategories] = useState([])
	const [category, setCategory] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	const [totalProducts, setTotalProducts] = useState(0)
	const [currentPage, setCurrentPage] = useState(1)
	const [showAll, setShowAll] = useState(false)

	const itemsPerPage = 20

	const getProducts = async () => {
		try {
			setIsLoading(true)
			let skip = (currentPage - 1) * itemsPerPage
			let url =
				category == null
					? `/products?limit=${itemsPerPage}&skip=${skip}`
					: `/products/category/${category}?limit=${itemsPerPage}&skip=${skip}`
			let res = await apiClient({ url })
			if (res?.status === 200) {
				setData(res?.data.products)
				setTotalProducts(res?.data.total)
			}
		} catch (error) {
			console.log(error.message)
		} finally {
			setIsLoading(false)
		}
	}

	const getCategories = async () => {
		let res = await apiClient({ url: '/products/category-list' })
		if (res?.status == 200) {
			setCategories(res?.data)
		}
	}

	useEffect(() => {
		getProducts()
	}, [category, currentPage])

	useEffect(() => {
		getCategories()
	}, [])

	const totalPages = Math.ceil(totalProducts / itemsPerPage)
	const visibleCategories = showAll ? categories : categories.slice(0, 10)

	return (
		<div className='bg-white/25 dark:bg-black/95'>
			<ToastContainer />

			<div className='py-24 container w-[90%] mx-auto '>
				<div className='grid grid-cols-4 gap-4'>
					<div className='col-span-1 sticky top-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-800 dark:to-black p-6 rounded-2xl shadow-lg h-[85vh] border border-gray-200 dark:border-gray-700 overflow-y-auto'>
						<p className='text-center text-2xl font-bold font-mono mb-4 text-gray-800 dark:text-gray-100'>
							📂 Categories
						</p>
						<div className='flex flex-col gap-3'>
							<button
								onClick={() => setCategory(null)}
								className={`text-center w-full py-2 rounded-lg transition-all duration-300 cursor-pointer shadow-sm border ${
									category == null
										? 'bg-blue-500 text-white shadow-lg'
										: 'bg-white dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200'
								}`}
							>
								Все
							</button>

							{visibleCategories?.map(res => (
								<button
									onClick={() => setCategory(res)}
									key={res}
									className={`text-center w-full py-2 rounded-lg transition-all duration-300 cursor-pointer shadow-sm border ${
										category == res
											? 'bg-blue-500 text-white shadow-lg'
											: 'bg-white dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200'
									}`}
								>
									{res}
								</button>
							))}

							{categories?.length > 10 && (
								<button
									onClick={() => setShowAll(!showAll)}
									className='mt-2 text-center w-full py-2 rounded-lg bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 text-gray-800 dark:text-gray-100 transition-all duration-300'
								>
									{showAll
										? '⬆️ Yashirish'
										: "⬇️ Ko'proq ko'rsatish"}
								</button>
							)}
						</div>
					</div>

					<div className='col-span-3'>
						{isLoading ? (
							<div className='flex justify-center items-center h-full'>
								<div className='w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500'></div>
							</div>
						) : (
							<div className='grid grid-cols-3 gap-4'>
								{data.map(item => (
									<div key={item?.id}>
										<div className='w-74 h-100 border rounded-xl border-black/20 cursor-pointer flex flex-col p-3 gap-2 shadow-lg bg-gray-50 dark:hover:shadow-2xl dark:hover:shadow-blue-500 dark:border-black dark:bg-black'>
											<Link
												to={`/clothes-detail/${item?.id}`}
											>
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
															position:
																'top-center',
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

						<div className='flex justify-center mt-6'>
							<div
								className='isolate inline-flex -space-x-px rounded-md shadow-xs '
								aria-label='Pagination'
							>
								<button
									onClick={() =>
										setCurrentPage(prev =>
											Math.max(prev - 1, 1)
										)
									}
									className='px-3 py-2 rounded-l-md border border-black/30 dark:bg-gray-300 dark:border-white   hover:bg-gray-400 '
								>
									<BsArrowLeftSquareFill className='text-blue-600' />
								</button>
								{[...Array(totalPages)].map((_, index) => (
									<button
										key={index + 1}
										onClick={() =>
											setCurrentPage(index + 1)
										}
										className={`px-4 py-2 border border-black/30 dark:border-white dark:text-white ${
											currentPage === index + 1
												? 'bg-blue-500 text-white'
												: 'dark:bg-gray-300 hover:bg-gray-400'
										}`}
									>
										{index + 1}
									</button>
								))}
								<button
									onClick={() =>
										setCurrentPage(prev =>
											Math.min(prev + 1, totalPages)
										)
									}
									className='px-3 py-2 rounded-r-md border border-black/30 hover:bg-gray-400 dark:border-white dark:bg-gray-300 '
								>
									<BsArrowRightSquareFill className='text-blue-600' />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CategoryDetails
