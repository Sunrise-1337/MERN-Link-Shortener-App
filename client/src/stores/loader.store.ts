import { makeAutoObservable } from 'mobx'
import SnackbarStore from './snackbar.store';

class LoaderStore {
    isLoading: boolean = false;
    count: number = 0;

    constructor(){
        makeAutoObservable(this)
    }

    toShowLoader(): void{
        if (SnackbarStore.message) SnackbarStore.toHideSnackBar()
        
        this.count++
        if (!this.isLoading) this.isLoading = true
    }

    toHideLoader(): void{
        if (this.count > 0) this.count--
        if (this.count === 0) this.isLoading = false
    }
}

export default new LoaderStore()