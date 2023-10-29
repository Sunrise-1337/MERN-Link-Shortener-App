import { makeAutoObservable } from 'mobx'
import SnackbarStore from './snackbar.store';

class IsLoadingStore {
    isLoading: boolean = false;

    constructor(){
        makeAutoObservable(this)
    }

    toSetLoadingTrue(): void{
        if (SnackbarStore.message) SnackbarStore.toHideSnackBar()
        this.isLoading = true
    }

    toSetLoadingFalse(): void{
        this.isLoading = false
    }
}

export default new IsLoadingStore()