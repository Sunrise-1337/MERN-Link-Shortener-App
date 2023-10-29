import configuredAxios from "../configs/axios/axios.config"
import { AuthRequestInterface } from "../interfaces/auth-request.interface"
import { InfoResponseInterface } from "../interfaces/info-response.interface"

export const toRegister = (data: AuthRequestInterface): Promise<InfoResponseInterface> => {
    return configuredAxios.post<InfoResponseInterface>('/api/auth/register', data).then(res => res.data)
}

export const toLogin = (data: AuthRequestInterface): Promise<InfoResponseInterface> => {
    return configuredAxios.post<InfoResponseInterface>('/api/auth/login', data).then(res => res.data)
}