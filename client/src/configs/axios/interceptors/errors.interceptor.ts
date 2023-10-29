import { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import SnackbarStore from "../../../stores/snackbar.store";
import { LoaderService } from "../../../services/loader.service";

export const errorRequestInterceptorLogic = [
    (request: InternalAxiosRequestConfig<any>) => {
        return request
    },
    (error: any) => {
        SnackbarStore.toShowSnackBar(error.response?.data.message, "error")
        LoaderService.getInstance().toHideLoader()
        
        return Promise.reject(error)
    }
]

export const errorResponseInterceptorLogic = [
    (response: AxiosResponse<any, any>) => {
        return response;
    },
    (error: any) => {
        SnackbarStore.toShowSnackBar(error.response?.data.message, "error")
        LoaderService.getInstance().toHideLoader()

        return Promise.reject(error)
    }
]