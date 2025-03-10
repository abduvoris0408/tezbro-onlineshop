import { CheckSquare, Home, List } from 'lucide-react'
import { useContext } from 'react'
import { FaRegStar } from 'react-icons/fa'
import { FiUser } from 'react-icons/fi'
import { IoBagCheck } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { CardContext } from '../Context/ContextProvider'
import DarkMode from './DarkMode'
const Navbar = () => {
	const { card } = useContext(CardContext)
	return (
		<div>
			<div className='w-full h-20 bg-white/25 dark:bg-white/5 border-b border-b-gray-300 dark:border-b-gray-600 fixed inset-0 z-50 backdrop-blur-md'>
				<div className='container w-[90%] mx-auto h-full flex items-center justify-between'>
					<div className=' flex items-center justify-center'>
						<img
							src='https://images.seeklogo.com/logo-png/27/2/shopify-logo-png_seeklogo-273895.png'
							className='flex items-center w-14 '
							alt='logo'
						/>
					</div>

					<ul className='flex items-center gap-5'>
						<Link to={'/'}>
							<li className='flex items-center gap-2 dark:text-white font-body cursor-pointer transition-all duration-300 dark:hover:text-blue-400 hover:bg-gray-200 dark:hover:bg-black/60 rounded-md px-4 py-2 shadow-sm hover:shadow-md'>
								<Home className='w-5 h-5 text-blue-500' />
								<span>Все товары</span>
							</li>
						</Link>

						<Link to={'/category-page'}>
							<li className='flex items-center gap-2 dark:text-white font-body cursor-pointer transition-all duration-300 dark:hover:text-blue-400 hover:bg-gray-200 dark:hover:bg-black/60 rounded-md px-4 py-2 shadow-sm hover:shadow-md'>
								<List className='w-5 h-5 text-green-500' />
								<span>По категориям</span>
							</li>
						</Link>
						<Link to={'/'}>
							<li className='flex items-center gap-2 dark:text-white font-body cursor-pointer transition-all duration-300 dark:hover:text-blue-400 hover:bg-gray-200 dark:hover:bg-black/60 rounded-md px-4 py-2 shadow-sm hover:shadow-md'>
								<CheckSquare className='w-5 h-5 text-purple-500' />
								<span>Выбрано</span>
							</li>
						</Link>
					</ul>
					<div className='flex items-center gap-3'>
						<ul className='flex items-center gap-2'>
							<li className='rounded-md p-1 hover:bg-black/70 cursor-pointer group'>
								<FaRegStar className='dark:text-white text-xl text-black group-hover:text-white' />
							</li>
							<Link
								to={'/profile'}
								className='rounded-md p-1 hover:bg-black/70 cursor-pointer group'
							>
								<FiUser className='dark:text-white text-xl text-black group-hover:text-white' />
							</Link>
							<Link
								to={'/basket'}
								className='rounded-md p-1 hover:bg-black/70 cursor-pointer group flex'
							>
								<IoBagCheck className='dark:text-white text-xl text-black group-hover:text-white' />
								<sup className='dark:text-white text-[13px]'>
									{card.length}
								</sup>
							</Link>
						</ul>
						<div className='flex gap-1 '>
							<DarkMode />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar
