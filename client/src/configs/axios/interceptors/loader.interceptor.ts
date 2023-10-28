import { LoaderService } from "../../../services/loader.service";
import { AxiosResponse, InternalAxiosRequestConfig } from "axios";

export const loaderRequestInterceptorLogic = [
    (request: InternalAxiosRequestConfig<any>) => {
        LoaderService.getInstance().toShowLoader()

        return request
    }
]

export const loaderResponseInterceptorLogic = [
    (response: AxiosResponse<any, any>) => {
        LoaderService.getInstance().toHideLoader()

        return response;
    }
]