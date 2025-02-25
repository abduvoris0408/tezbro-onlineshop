import { useEffect, useState } from 'react'
import { BiLike } from 'react-icons/bi'
import { FaRegStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { apiClient } from '../utils/apiservice'
import Loading from './Loading'

const Cards = () => {
	const [data, setData] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	const getProducts = async () => {
		try {
			let res = await apiClient({
				url: '/products',
			})
			if (res?.status === 200) {
				setData(res?.data.products)
			}
		} catch (error) {
			console.error('Xatolik yuz berdi:', error)
		} finally {
			setIsLoading(false)
		}
	}

	useEffect(() => {
		getProducts()
	}, [])

	if (isLoading) {
		return (
			<div className='container w-[90%] mx-auto'>
				<Loading />
			</div>
		)
	}

	return (
		<div className='container w-[90%] mx-auto mt-5'>
			<div className='grid grid-cols-4 gap-4 w-7xl mx-auto py-8'>
				{data.map(item => {
					return (
						<div key={item?.id}>
							<div className='w-74 h-100 border rounded-xl border-black/20 cursor-pointer flex  flex-col p-3 gap-2 shadow-lg bg-gray-50 dark:hover:shadow-2xl dark:hover:shadow-blue-500 dark:border-black dark:bg-black'>
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
								<button className='px-2 py-1 bg-blue-400 rounded-md text-white cursor-pointer active:bg-blue-600'>
									Добавить в корзину
								</button>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Cards
