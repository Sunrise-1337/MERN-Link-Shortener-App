import SnackbarStore from "../stores/snackbar.store";
import LoaderStore from "../stores/loader.store"
import { SnackbarTypesConstants } from "../constants/snackbar-types.constants";

export const errorRequestInterceptorLogic = [
    ,
    (error: any) => {
        SnackbarStore.toShowSnackBar(error.response?.data.message, SnackbarTypesConstants.error)
        LoaderStore.toHideLoader()
        
        return Promise.reject(error)
    }
]

export const errorResponseInterceptorLogic = [
    ,
    (error: any) => {
        SnackbarStore.toShowSnackBar(error.response?.data.message, SnackbarTypesConstants.error)
        LoaderStore.toHideLoader()

        return Promise.reject(error)
    }
]