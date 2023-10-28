import { makeAutoObservable } from 'mobx'

class SnackBarStore {
    message: string = '';
    type: string = '';

    constructor(){
        makeAutoObservable(this)
    }

    toShowSnackBar (message: string, type: string): void{
        this.message = message;
        this.type = type;
    }

    toHideSnackBar (): void{
        this.message = '';
        this.type = '';
    }
}

export default new SnackBarStore()