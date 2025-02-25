import { useEffect, useState } from 'react'
import { IoSunnyOutline } from 'react-icons/io5'
import { PiMoon } from 'react-icons/pi'

const DarkMode = () => {
	const [isDarkMode, setIsDarkMode] = useState(() => {
		const storedTheme = localStorage.getItem('darkMode')
		return storedTheme === 'true'
	})

	useEffect(() => {
		if (isDarkMode) {
			document.documentElement.classList.add('dark')
			localStorage.setItem('darkMode', 'true')
		} else {
			document.documentElement.classList.remove('dark')
			localStorage.setItem('darkMode', 'false')
		}
	}, [isDarkMode])

	const toggleDarkMode = () => {
		setIsDarkMode(prev => !prev)
	}

	return (
		<button
			onClick={toggleDarkMode}
			className='inline-flex items-center justify-center rounded-md p-1 dark:hover:bg-black/70 hover:bg-gray-400 cursor-pointer whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-none'
		>
			{isDarkMode ? (
				<IoSunnyOutline className='text-xl text-white cursor-pointer' />
			) : (
				<PiMoon className='text-xl cursor-pointer ' />
			)}
		</button>
	)
}

export default DarkMode
