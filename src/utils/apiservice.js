import axios from 'axios'

export const apiClient = axios.create({
	baseURL: 'https://dummyjson.com',
})

apiClient.interceptors.response.use(
	res => {
		return res
	},
	err => {
		console.log(err)
	}
)
