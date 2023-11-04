import LoaderStore from "../stores/loader.store"
import { AxiosResponse, InternalAxiosRequestConfig } from "axios";

export const loaderRequestInterceptorLogic = [
    (request: InternalAxiosRequestConfig<any>) => {
        LoaderStore.toShowLoader()

        return request
    }
]

export const loaderResponseInterceptorLogic = [
    (response: AxiosResponse<any, any>) => {
        LoaderStore.toHideLoader()

        return response;
    }
]