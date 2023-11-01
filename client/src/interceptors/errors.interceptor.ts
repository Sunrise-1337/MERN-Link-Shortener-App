import SnackbarStore from "../stores/snackbar.store";
import { LoaderService } from "../services/loader.service";
import { SnackbarTypesConstants } from "../constants/snackbar-types.constants";

export const errorRequestInterceptorLogic = [
    ,
    (error: any) => {
        SnackbarStore.toShowSnackBar(error.response?.data.message, SnackbarTypesConstants.error)
        LoaderService.getInstance().toHideLoader()
        
        return Promise.reject(error)
    }
]

export const errorResponseInterceptorLogic = [
    ,
    (error: any) => {
        SnackbarStore.toShowSnackBar(error.response?.data.message, SnackbarTypesConstants.error)
        LoaderService.getInstance().toHideLoader()

        return Promise.reject(error)
    }
]