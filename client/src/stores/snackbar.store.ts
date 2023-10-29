import { AlertColor } from '@mui/material';
import { makeAutoObservable } from 'mobx'

class SnackBarStore {
    message: string = '';
    type: AlertColor = 'error';

    constructor(){
        makeAutoObservable(this)
    }

    toShowSnackBar (message: string = '', type: AlertColor): void{
        if (this.message) this.toHideSnackBar()
        
        this.message = message || 'Something went wrong, please try again later';
        this.type = type;
    }

    toHideSnackBar (): void{
        this.message = '';
        this.type = 'error';
    }
}

export default new SnackBarStore()