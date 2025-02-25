import { useEffect, useState } from 'react'
import { BiLike } from 'react-icons/bi'
import { FaRegStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { apiClient } from '../utils/apiservice'

const CategoryDetails = () => {
	const [data, setData] = useState([])
	const [categories, setCategories] = useState(null)
	const [category, setCategory] = useState(null)
	const [isLoading, setIsLoading] = useState(false)

	const getProducts = async () => {
		try {
			setIsLoading(true)
			let res = await apiClient({
				url:
					category == null
						? `/products`
						: `/products/category/${category}`,
			})
			if (res?.status === 200) {
				setData(res?.data.products)
			}
		} catch (error) {
			console.log(error.message)
		} finally {
			setIsLoading(false)
		}
	}

	const getCategories = async () => {
		let res = await apiClient({
			url: '/products/category-list',
		})
		if (res?.status == 200) {
			setCategories(res?.data)
		}
	}

	useEffect(() => {
		getProducts()
	}, [category])

	useEffect(() => {
		getCategories()
	}, [])
	const [showAll, setShowAll] = useState(false)
	const visibleCategories = showAll ? categories : categories?.slice(0, 10)

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
										<div className='w-full h-100 border rounded-xl border-black/20 cursor-pointer flex flex-col p-3 gap-2 shadow-lg bg-gray-50 dark:hover:shadow-2xl dark:hover:shadow-blue-500 dark:border-black dark:bg-black'>
											<Link
												to={`/clothes-detail/${item?.id}`}
											>
												<img
													className='w-full h-60 object-cover rounded-xl shadow-md'
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
												<div className='flex gap-2'>
													<BiLike className='text-xl dark:text-white hover:bg-gray-300 rounded-md' />
													<FaRegStar className='text-xl dark:text-white hover:bg-gray-300 rounded-md' />
												</div>
											</div>
											<button className='px-2 py-1 bg-blue-400 rounded-md text-white cursor-pointer active:bg-blue-600'>
												Добавить в корзину
											</button>
										</div>
									</div>
								))}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default CategoryDetails
