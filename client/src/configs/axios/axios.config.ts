import axios from "axios"
import { loaderRequestInterceptorLogic, loaderResponseInterceptorLogic } from "./interceptors/loader.interceptor"

const configuredAxios = axios.create({
    baseURL: "http://localhost:8080"
})

// Loader Interceptors
configuredAxios.interceptors.request.use(...loaderRequestInterceptorLogic)

configuredAxios.interceptors.response.use(...loaderResponseInterceptorLogic)

export default configuredAxios