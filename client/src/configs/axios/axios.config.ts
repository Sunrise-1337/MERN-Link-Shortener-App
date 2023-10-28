import axios from "axios"
import { loaderRequestInterceptorLogic, loaderResponseInterceptorLogic } from "./interceptors/loader.interceptor"
import { errorRequestInterceptorLogic, errorResponseInterceptorLogic } from "./interceptors/errors.interceptor"

const configuredAxios = axios.create({
    baseURL: "http://localhost:8080"
})

// Loader Interceptors
configuredAxios.interceptors.request.use(...loaderRequestInterceptorLogic)

configuredAxios.interceptors.response.use(...loaderResponseInterceptorLogic)


// Error Interceptors
configuredAxios.interceptors.request.use(...errorRequestInterceptorLogic)

configuredAxios.interceptors.response.use(...errorResponseInterceptorLogic)

export default configuredAxios