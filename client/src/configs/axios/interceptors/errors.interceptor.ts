import { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import SnackbarStore from "../../../stores/snackbar.store";

export const errorRequestInterceptorLogic = [
    (request: InternalAxiosRequestConfig<any>) => {
        return request
    },
    (error: any) => {
        SnackbarStore.toShowSnackBar(error.message, "error")
        
        return Promise.reject(error)
    }
]

export const errorResponseInterceptorLogic = [
    (response: AxiosResponse<any, any>) => {
        return response;
    },
    (error: any) => {
        SnackbarStore.toShowSnackBar(error.message, "error")

        return Promise.reject(error)
    }
]