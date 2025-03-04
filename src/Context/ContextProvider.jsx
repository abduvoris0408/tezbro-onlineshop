import { createContext, useState } from 'react'
import { toast } from 'react-toastify'
export const CardContext = createContext()

const ContextProvider = ({ children }) => {
	const [card, setCard] = useState([])

	const pushCart = obj => {
		if (card.length == 0) {
			let current = [...card]
			current.push({ ...obj, count: 1 })
			setCard(current)
		} else {
			let current = [...card]
			let finded = current.find(product => {
				return product?.id == obj?.id
			})
			if (!finded) {
				current.push({ ...obj, count: 1 })
				setCard(current)
			}
		}
	}

	const handleIncrease = i => {
		let current = [...card]
		if (current[i].stock !== current[i].count) {
			current[i].count += 1
		} else {
			toast.warn('Mahsulot tugadi!', {
				position: 'top-center',
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				theme: 'colored',
			})
		}
		setCard(current)
	}
	const handleDecrease = i => {
		let current = [...card]
		if (current[i].count > 1) {
			current[i].count -= 1
		} else {
			current.splice(i, 1)
		}
		setCard(current)
	}

	const deleteHandle = i => {
		let current = [...card]
		current.splice(i, 1)
		setCard(current)
	}
	return (
		<CardContext.Provider
			value={{
				card,
				setCard,
				pushCart,
				handleIncrease,
				handleDecrease,
				deleteHandle,
			}}
		>
			{children}
		</CardContext.Provider>
	)
}

export default ContextProvider
