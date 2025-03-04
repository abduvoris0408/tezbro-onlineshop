import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import AppRouter from './router/Router'

const App = () => {
	const location = useLocation()
	const navigate = useNavigate()
	const hideNavbarFooter = location.pathname === '/login'

	useEffect(() => {
		const token = localStorage.getItem('accessToken')
		if (!token) {
			navigate('/login')
		}
	}, [navigate])

	return (
		<div>
			{!hideNavbarFooter && <Navbar />}
			<AppRouter />
			{!hideNavbarFooter && <Footer />}
		</div>
	)
}

export default App
