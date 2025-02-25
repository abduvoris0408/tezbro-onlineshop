import { useRoutes } from 'react-router-dom'
import CategoryDetails from '../pages/CategoryDetails'
import Clothes from '../pages/Clothes'
import ClothesDetail from '../pages/ClothesDetail'

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
	])
}

export default Router
