import axios, { type AxiosError } from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL || `https://jsonplaceholder.typicode.com/`,
  timeout: 5000
})

async function errHandler(error: AxiosError) {
  const response = error.response
  // const userStore = useUserStore()
  if (response) {
    switch (response.status) {
      case 401:
        // TODO: refresh token according to your backend
        // if (userStore.token) {
        //   return userStore.refreshToken().then((resp) => {
        //     return service(error.response!.config)
        //   })
        // }
        break
    }
    if (!response.headers['content-type']?.includes('text/html')) throw response.data
  }
  throw error
}

// Request interceptors
api.interceptors.request.use(
  async (config) => {
    // Add X-Access-Token header to every request, you can add other custom headers here

    return config
  }
  // Add Error Handler Below
)

// Response interceptors
api.interceptors.response.use((response) => {
  return response
}, errHandler)

export default api
