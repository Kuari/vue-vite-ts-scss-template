import Cookies from 'js-cookie'

// User
const tokenKey = 'vue-vite-tailwind-template'
export const getToken = () => Cookies.get(tokenKey)
export const setToken = (token: string) => Cookies.set(tokenKey, token)
export const removeToken = () => Cookies.remove(tokenKey)
