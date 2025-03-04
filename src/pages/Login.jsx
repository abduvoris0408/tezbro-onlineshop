import { notification } from 'antd'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
	const [api, contextHolder] = notification.useNotification()
	const navigate = useNavigate()

	const openNotification = (message, description) => {
		api.info({
			message,
			description,
			placement: 'top',
		})
	}
	useEffect(() => {
		openNotification(
			'Welcome',
			'API Malumotlariga kora kirish uchun mana shu username va koddan foydalaning. => Username:"emilys" , kod:"emilyspass"'
		)
	}, [])

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const submitLogin = async e => {
		e.preventDefault()
		try {
			let res = await axios.post(
				'https://dummyjson.com/auth/login',
				{
					username,
					password,
				},
				{
					headers: { 'Content-Type': 'application/json' },
				}
			)

			if (res.status === 200) {
				localStorage.setItem('accessToken', res.data.accessToken)
				openNotification('Success', 'You have successfully logged in.')
				navigate('/')
			}
		} catch (error) {
			openNotification(
				'Login Failed',
				error.response?.data?.message || 'An error occurred'
			)
		}
	}

	return (
		<>
			{contextHolder}
			<div className='container w-[80%] mx-auto flex'>
				<div className='w-100 border border-black/20 rounded-lg cursor-pointer mx-auto my-18 hover:shadow-lg'>
					<div className='flex min-h-full flex-col justify-center px-6 py-18 lg:px-8'>
						<div className='sm:mx-auto sm:w-full sm:max-w-sm'>
							<img
								className='mx-auto h-12 w-auto'
								src='https://images.seeklogo.com/logo-png/27/2/shopify-logo-png_seeklogo-273895.png'
								alt='Your Company'
							/>
							<h2 className='mt-10 text-center text-2xl font-bold tracking-tight text-gray-900'>
								Sign in to your account
							</h2>
						</div>
						<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
							<form className='space-y-6' onSubmit={submitLogin}>
								<div>
									<label
										htmlFor='username'
										className='block text-sm font-medium text-gray-900'
									>
										Username
									</label>
									<div className='mt-2'>
										<input
											type='text'
											id='username'
											value={username}
											onChange={e =>
												setUsername(e.target.value)
											}
											required
											className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm'
										/>
									</div>
								</div>
								<div>
									<div className='flex items-center justify-between'>
										<label
											htmlFor='password'
											className='block text-sm font-medium text-gray-900'
										>
											Password
										</label>
										<div className='text-sm'>
											<a
												href='#'
												className='font-semibold text-indigo-600 hover:text-indigo-500'
											>
												Forgot password?
											</a>
										</div>
									</div>
									<div className='mt-2'>
										<input
											type='password'
											id='password'
											value={password}
											onChange={e =>
												setPassword(e.target.value)
											}
											required
											className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm'
										/>
									</div>
								</div>
								<div>
									<button
										type='submit'
										className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
									>
										Sign in
									</button>
								</div>
							</form>
							<p className='mt-10 text-center text-sm text-gray-500'>
								Not a member?{' '}
								<a
									href='#'
									className='font-semibold text-indigo-600 hover:text-indigo-500'
								>
									Register here
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Login
