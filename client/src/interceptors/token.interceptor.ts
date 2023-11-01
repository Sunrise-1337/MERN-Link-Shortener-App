import { InternalAxiosRequestConfig } from "axios"
import { getCookie } from "../helpers/cookies.helper"
import { CookiesConstants } from "../constants/cookies.constants"

export const tokenRequestInterceptorLogic = [
    (request: InternalAxiosRequestConfig<any>) => {
        const token = getCookie(CookiesConstants.token);

        if (token) request.headers.Authorization = `Bearer ${token}`

        return request
    }
]