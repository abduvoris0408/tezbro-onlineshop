import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiClient } from '../utils/apiservice'

const ClothesDetail = () => {
	const { product_id } = useParams()
	const [product, setProduct] = useState(null)
	const [loading, setLoading] = useState(true)

	const getProductDetail = async () => {
		let res = await apiClient({
			url: `/products/${product_id}`,
		})
		if (res?.status === 200) {
			setProduct(res?.data)
			setLoading(false)
		}
	}

	useEffect(() => {
		setTimeout(() => {
			getProductDetail()
		}, 1000)
	}, [])

	if (loading) {
		return (
			<div className='flex items-center justify-center min-h-screen bg-gray-100 dark:bg-black'>
				<div className='w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin'></div>
			</div>
		)
	}

	if (!product) return <div>Ma`lumotlar topilmadi...</div>

	return (
		<div className='bg-white/25 dark:bg-black/95 min-h-screen text-gray-900 dark:text-gray-100'>
			<div className='container w-[90%] mx-auto py-24'>
				<div className='flex flex-col lg:flex-row gap-10'>
					<div className='flex-1'>
						<img
							src={product?.images[0]}
							className='w-full rounded-2xl shadow-lg dark:border border-gray-700 cursor-pointer'
							alt={product?.title}
						/>
						<button className='cursor-pointer mt-2 w-full flex items-center justify-center gap-2 border rounded-2xl py-3 bg-blue-500 hover:bg-blue-600 text-white shadow-lg transition'>
							<span className='text-xl'>🛒</span>
							Покупка в один клик
						</button>
					</div>

					<div className='flex-1 space-y-5'>
						<h1 className='text-4xl font-bold'>{product?.title}</h1>
						<p className='text-lg text-gray-500 dark:text-gray-300'>
							{product?.description}
						</p>
						<div className='flex gap-2'>
							<span className='px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded'>
								{product?.brand}
							</span>
							<span className='px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded'>
								{product?.category}
							</span>
							<span className='px-3 py-1 border rounded'>
								SKU: {product?.sku}
							</span>
						</div>
						<div className='text-2xl font-semibold'>
							${product?.price}{' '}
							<span className='text-green-500'>
								(-{product?.discountPercentage}%)
							</span>
						</div>
						<div className='flex items-center gap-2'>
							<span className='text-yellow-400'>★</span>{' '}
							{product?.rating} / 5
						</div>
						<p className='text-red-500'>
							Stock: {product?.stock} (
							{product?.availabilityStatus})
						</p>
						<p>Warranty: {product?.warrantyInformation}</p>
						<p>Shipping: {product?.shippingInformation}</p>
						<p>Return Policy: {product?.returnPolicy}</p>

						<div className='mt-6 p-4 bg-white/25 dark:bg-black/50 rounded-lg shadow text-center'>
							<h2 className='text-xl font-bold mb-2'>
								Scan QR Code
							</h2>
							<img
								src={product?.meta?.qrCode}
								alt='QR Code'
								className='mx-auto w-40 h-40 rounded-lg border border-gray-300 dark:border-gray-600'
							/>
						</div>

						<div className='mt-6 p-4 bg-white/25 dark:bg-black/50 rounded-lg shadow'>
							<h2 className='text-2xl font-bold mb-4'>Reviews</h2>
							{product?.reviews?.map((review, index) => (
								<div
									key={index}
									className='mb-4 border-b border-gray-300 dark:border-gray-600 pb-2'
								>
									<div className='flex items-center gap-2'>
										<span
											className={`text-${
												review.rating >= 4
													? 'yellow-400'
													: 'red-500'
											}`}
										>
											★
										</span>
										<span className='font-semibold'>
											{review.reviewerName}
										</span>
									</div>
									<p className='text-gray-600 dark:text-gray-300'>
										{review.comment}
									</p>
									<p className='text-sm text-gray-400'>
										{new Date(
											review.date
										).toLocaleDateString()}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ClothesDetail
