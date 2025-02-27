// import { useEffect, useState } from 'react'
// import { BiLike } from 'react-icons/bi'
// import { FaRegStar } from 'react-icons/fa'
// import { Link } from 'react-router-dom'
// import { apiClient } from '../utils/apiservice'

// const CategoryDetails = () => {
// 	const [data, setData] = useState([])
// 	const [categories, setCategories] = useState(null)
// 	const [category, setCategory] = useState(null)
// 	const [isLoading, setIsLoading] = useState(false)

// 	const getProducts = async () => {
// 		try {
// 			setIsLoading(true)
// 			let res = await apiClient({
// 				url:
// 					category == null
// 						? `/products`
// 						: `/products/category/${category}`,
// 			})
// 			if (res?.status === 200) {
// 				setData(res?.data.products)
// 			}
// 		} catch (error) {
// 			console.log(error.message)
// 		} finally {
// 			setIsLoading(false)
// 		}
// 	}

// 	const getCategories = async () => {
// 		let res = await apiClient({
// 			url: '/products/category-list',
// 		})
// 		if (res?.status == 200) {
// 			setCategories(res?.data)
// 		}
// 	}

// 	useEffect(() => {
// 		getProducts()
// 	}, [category])

// 	useEffect(() => {
// 		getCategories()
// 	}, [])
// 	const [showAll, setShowAll] = useState(false)
// 	const visibleCategories = showAll ? categories : categories?.slice(0, 10)

// 	return (
// 		<div className='bg-white/25 dark:bg-black/95'>
// 			<div className='py-24 container w-[90%] mx-auto '>
// 				<div className='grid grid-cols-4 gap-4'>
// 					<div className='col-span-1 sticky top-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-800 dark:to-black p-6 rounded-2xl shadow-lg h-[85vh] border border-gray-200 dark:border-gray-700 overflow-y-auto'>
// 						<p className='text-center text-2xl font-bold font-mono mb-4 text-gray-800 dark:text-gray-100'>
// 							📂 Categories
// 						</p>
// 						<div className='flex flex-col gap-3'>
// 							<button
// 								onClick={() => setCategory(null)}
// 								className={`text-center w-full py-2 rounded-lg transition-all duration-300 cursor-pointer shadow-sm border ${
// 									category == null
// 										? 'bg-blue-500 text-white shadow-lg'
// 										: 'bg-white dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200'
// 								}`}
// 							>
// 								Все
// 							</button>

// 							{visibleCategories?.map(res => (
// 								<button
// 									onClick={() => setCategory(res)}
// 									key={res}
// 									className={`text-center w-full py-2 rounded-lg transition-all duration-300 cursor-pointer shadow-sm border ${
// 										category == res
// 											? 'bg-blue-500 text-white shadow-lg'
// 											: 'bg-white dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200'
// 									}`}
// 								>
// 									{res}
// 								</button>
// 							))}

// 							{categories?.length > 10 && (
// 								<button
// 									onClick={() => setShowAll(!showAll)}
// 									className='mt-2 text-center w-full py-2 rounded-lg bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 text-gray-800 dark:text-gray-100 transition-all duration-300'
// 								>
// 									{showAll
// 										? '⬆️ Yashirish'
// 										: "⬇️ Ko'proq ko'rsatish"}
// 								</button>
// 							)}
// 						</div>
// 					</div>

// 					<div className='col-span-3'>
// 						{isLoading ? (
// 							<div className='flex justify-center items-center h-full'>
// 								<div className='w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500'></div>
// 							</div>
// 						) : (
// 							<div className='grid grid-cols-3 gap-4'>
// 								{data.map(item => (
// 									<div key={item?.id} className='mb-4'>
// 										<div className='w-full h-100 border rounded-xl border-black/20 cursor-pointer flex flex-col p-3 gap-2 shadow-lg bg-gray-50 dark:hover:shadow-2xl dark:hover:shadow-blue-500 dark:border-black dark:bg-black'>
// 											<Link
// 												to={`/clothes-detail/${item?.id}`}
// 											>
// 												<img
// 													className='w-full h-60 object-cover rounded-xl shadow-md'
// 													src={item?.images}
// 													alt=''
// 												/>
// 											</Link>
// 											<div className='flex justify-between p-1'>
// 												<div>
// 													<p className='w-[95%] h-[50px] overflow-hidden dark:text-white'>
// 														{item?.title}
// 													</p>
// 													<p className='uppercase mt-2 dark:text-gray-100 font-bold font-mono'>
// 														цена: {item?.price} $
// 													</p>
// 												</div>
// 												<div className='flex gap-2'>
// 													<BiLike className='text-xl dark:text-white hover:bg-gray-300 rounded-md' />
// 													<FaRegStar className='text-xl dark:text-white hover:bg-gray-300 rounded-md' />
// 												</div>
// 											</div>
// 											<button className='px-2 py-1 bg-blue-400 rounded-md text-white cursor-pointer active:bg-blue-600'>
// 												Добавить в корзину
// 											</button>
// 										</div>
// 									</div>
// 								))}
// 							</div>
// 						)}

// <div className="isolate inline-flex -space-x-px rounded-md shadow-xs larni" aria-label="Pagination">
//       <a
//         href="#"
//         className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 dark:text-gray-300 dark:ring-gray-600 dark:hover:bg-gray-700"
//       >
//         <span className="sr-only">Previous</span>
//         <svg className="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//           <path
//             fillRule="evenodd"
//             d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
//             clipRule="evenodd"
//           />
//         </svg>
//       </a>

//       <a
//         href="#"
//         aria-current="page"
//         className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500"
//       >
//         1
//       </a>
//       <a
//         href="#"
//         className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 dark:text-white dark:ring-gray-600 dark:hover:bg-gray-700"
//       >
//         2
//       </a>
//       <a
//         href="#"
//         className="relative hidden md:inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 dark:text-white dark:ring-gray-600 dark:hover:bg-gray-700"
//       >
//         3
//       </a>
//       <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-gray-300 ring-inset focus:outline-offset-0 dark:text-gray-400 dark:ring-gray-600">
//         ...
//       </span>
//       <a
//         href="#"
//         className="relative hidden md:inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 dark:text-white dark:ring-gray-600 dark:hover:bg-gray-700"
//       >
//         8
//       </a>
//       <a
//         href="#"
//         className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 dark:text-white dark:ring-gray-600 dark:hover:bg-gray-700"
//       >
//         9
//       </a>
//       <a
//         href="#"
//         className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 dark:text-white dark:ring-gray-600 dark:hover:bg-gray-700"
//       >
//         10
//       </a>
//       <a
//         href="#"
//         className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 dark:text-gray-300 dark:ring-gray-600 dark:hover:bg-gray-700"
//       >
//         <span className="sr-only">Next</span>
//         <svg className="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//           <path
//             fillRule="evenodd"
//             d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
//             clipRule="evenodd"
//           />
//         </svg>
//       </a>
//     </div>

// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

// export default CategoryDetails

import { useEffect, useState } from 'react'
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { apiClient } from '../utils/apiservice'

const CategoryDetails = () => {
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
									<div key={item?.id} className='mb-4'>
										<div className='w-full h-100 border rounded-xl border-black/20 p-3 gap-2 shadow-lg bg-gray-50 dark:border-black dark:bg-black'>
											<Link
												to={`/clothes-detail/${item?.id}`}
											>
												<img
													className='w-full h-60 object-cover rounded-xl shadow-md'
													src={item?.images}
													alt=''
												/>
											</Link>
											<p className='w-[95%] h-[50px] overflow-hidden dark:text-white'>
												{item?.title}
											</p>
											<p className='uppercase mt-2 dark:text-gray-100 font-bold font-mono'>
												цена: {item?.price} $
											</p>
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
