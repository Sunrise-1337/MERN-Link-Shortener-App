import configuredAxios from "../configs/axios/axios.config"
import { AuthRequestInterface } from "../interfaces/auth-request.interface"
import { InfoResponseInterface } from "../interfaces/info-response.interface"
import { LinkDataInterface } from "../interfaces/link-data.interface"
import { LoginResponseInterface } from "../interfaces/login-response.interface"

const url__holder = {
    toRegister: '/api/auth/register',
    toLogin: '/api/auth/login',
    toSendLinkToShorten: '/api/links/shorten',
    toGetLinks: '/api/links/',
}

export const toRegister = (data: AuthRequestInterface): Promise<InfoResponseInterface> => {
    return configuredAxios.post<InfoResponseInterface>(
        url__holder.toRegister, 
        data
    )
    .then(res => res.data)
}

export const toLogin = (data: AuthRequestInterface): Promise<LoginResponseInterface> => {
    return configuredAxios.post<LoginResponseInterface>(
        url__holder.toLogin, 
        data
    )
    .then(res => res.data)
}

export const toSendLinkToShorten = (fullLink: string): Promise<LinkDataInterface> => {
    return configuredAxios.post<LinkDataInterface>(
        url__holder.toSendLinkToShorten, 
        { 
            fullLink 
        }
    )
    .then(res => res.data)
}

export const toGetSingleLinkData = (id: string): Promise<LinkDataInterface> => {
    return configuredAxios.get<LinkDataInterface>(
        url__holder.toGetLinks + id
    )
    .then(res => res.data)
}

export const toGetAllLinks = (): Promise<LinkDataInterface[]> => {
    return configuredAxios.get<LinkDataInterface[]>(
        url__holder.toGetLinks
    )
    .then(res => res.data)
}