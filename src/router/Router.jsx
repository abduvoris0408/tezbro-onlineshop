import { useRoutes } from 'react-router-dom'
import Basket from '../pages/Basket'
import CategoryDetails from '../pages/CategoryDetails'
import Clothes from '../pages/Clothes'
import ClothesDetail from '../pages/ClothesDetail'
import Login from '../pages/Login'
import Profile from '../pages/Profile'

const Router = () => {
	return useRoutes([
		{
			path: '/',
			element: <Clothes />,
		},
		{
			path: '/clothes-detail/:product_id',
			element: <ClothesDetail />,
		},
		{
			path: '/category-page',
			element: <CategoryDetails />,
		},
		{
			path: '/login',
			element: <Login />,
		},
		{
			path: '/basket',
			element: <Basket />,
		},
		{
			path: '/profile',
			element: <Profile />,
		},
	])
}

export default Router
