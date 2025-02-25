import { FaChevronRight } from 'react-icons/fa'
import Cards from '../components/Cards'
import CompactSlider from '../components/CompactSlider'
const Clothes = () => {
	return (
		<div className='pt-18 bg-white/25 dark:bg-black/95'>
			<CompactSlider />
			<div className='container w-[90%] mx-auto'>
				<div className='flex justify-between'>
					<p className='uppercase dark:text-white text-2xl font-bold hover:text-blue-500'>
						Все товары
					</p>
					<p className='dark:text-white uppercase  border-b py-2  text-black flex items-center gap-1 hover:text-blue-500 cursor-pointer'>
						больше товаров
						<FaChevronRight />
					</p>
				</div>
			</div>
			<Cards />
		</div>
	)
}

export default Clothes
