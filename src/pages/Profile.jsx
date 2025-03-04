import { useEffect, useState } from 'react'
import { BiEdit } from 'react-icons/bi'
import {
	FaBuilding,
	FaEnvelope,
	FaGithub,
	FaGraduationCap,
	FaLinkedin,
	FaMapMarkerAlt,
	FaPhone,
	FaTwitter,
} from 'react-icons/fa'

const Profile = () => {
	const [userData, setUserData] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	const fetchUserData = async () => {
		try {
			setLoading(true)
			setError(null)
			const response = await fetch('https://dummyjson.com/users/1')
			if (!response.ok) throw new Error('Failed to fetch user data')
			const data = await response.json()
			setUserData(data)
		} catch (err) {
			setError(err.message)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		fetchUserData()
	}, [])

	if (loading) {
		return (
			<div className='min-h-screen bg-gray-100 p-6 flex flex-col items-center'>
				<div className='w-full max-w-4xl animate-pulse'>
					<div className='bg-white shadow-lg rounded-lg p-8 mb-6 flex flex-col items-center'>
						<div className='w-48 h-48 bg-gray-300 rounded-full mb-4'></div>
						<div className='h-8 bg-gray-300 w-64 rounded mb-2'></div>
						<div className='h-4 bg-gray-300 w-48 rounded'></div>
					</div>
				</div>
			</div>
		)
	}

	if (error) {
		return (
			<div className='min-h-screen bg-gray-100 p-6 flex flex-col items-center justify-center'>
				<div className='bg-red-100 text-red-600 p-4 rounded-lg mb-4'>
					{error}
				</div>
				<button
					onClick={fetchUserData}
					className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors'
				>
					Retry
				</button>
			</div>
		)
	}

	return (
		<div className='min-h-screen py-22 bg-white/25 dark:bg-black/95  flex flex-col items-center'>
			<div className='w-full max-w-4xl'>
				<div className='bg-white dark:bg-black/95 shadow-lg rounded-lg p-8 mb-6 flex flex-col items-center relative'>
					<button
						className='absolute top-4 right-4 p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors'
						aria-label='Edit Profile'
					>
						<BiEdit className='w-5 h-5 text-gray-700' />
					</button>
					<img
						src={
							userData?.image ||
							'https://images.unsplash.com/photo-1633332755192-727a05c4013d'
						}
						alt={userData?.firstName}
						className='w-48 h-48 rounded-full object-cover mb-4 ring-4 ring-blue-200'
						loading='lazy'
					/>
					<h1 className='text-2xl font-bold text-gray-800 mb-2 dark:text-white'>
						{userData?.firstName} {userData?.lastName}
					</h1>
					<p className='text-gray-600 mb-4 dark:text-white'>
						{userData?.company?.title}
					</p>
					<div className='flex gap-4'>
						<a
							href='#'
							className='text-blue-500 hover:text-blue-700 transition-colors'
							aria-label='LinkedIn'
						>
							<FaLinkedin size={24} />
						</a>
						<a
							href='#'
							className='text-blue-400 hover:text-blue-600 transition-colors'
							aria-label='Twitter'
						>
							<FaTwitter size={24} />
						</a>
						<a
							href='#'
							className='text-gray-800 hover:text-gray-600 transition-colors'
							aria-label='GitHub'
						>
							<FaGithub size={24} />
						</a>
					</div>
				</div>

				<div className='bg-white dark:bg-black/95 shadow-lg rounded-lg p-6 mb-6'>
					<h2 className='text-xl font-bold text-gray-800 mb-4 dark:text-white'>
						Personal Information
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
						<div className='flex items-center gap-3'>
							<FaEnvelope className='text-blue-500' />
							<span className='text-gray-700 dark:text-white'>
								{userData?.email}
							</span>
						</div>
						<div className='flex items-center gap-3'>
							<FaPhone className='text-blue-500' />
							<span className='text-gray-700 dark:text-white'>
								{userData?.phone}
							</span>
						</div>
						<div className='flex items-center gap-3'>
							<FaMapMarkerAlt className='text-blue-500' />
							<span className='text-gray-700 dark:text-white'>
								{userData?.address?.city},{' '}
								{userData?.address?.state}
							</span>
						</div>
						<div className='flex items-center gap-3'>
							<span className='text-gray-700 dark:text-white'>
								Age: {userData?.age} | Gender:{' '}
								{userData?.gender}
							</span>
						</div>
					</div>
				</div>

				<div className='bg-white dark:bg-black/95 shadow-lg rounded-lg p-6'>
					<h2 className='text-xl font-bold text-gray-800 mb-4 dark:text-white'>
						Professional Details
					</h2>
					<div className='space-y-4'>
						<div className='flex items-start gap-3'>
							<FaBuilding className='text-blue-500 mt-1' />
							<div>
								<h3 className='text-gray-800 font-bold dark:text-white'>
									{userData?.company?.name}
								</h3>
								<p className='text-gray-600 text-sm dark:text-white'>
									{userData?.company?.department}
								</p>
							</div>
						</div>
						<div className='flex items-start gap-3'>
							<FaGraduationCap className='text-blue-500 mt-1' />
							<div>
								<h3 className='text-gray-800 font-bold dark:text-white'>
									University of Technology
								</h3>
								<p className='text-gray-600 text-sm dark:text-white'>
									Computer Science
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Profile
