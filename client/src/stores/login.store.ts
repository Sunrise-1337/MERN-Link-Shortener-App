import { makeAutoObservable } from 'mobx'

class IsLoggedInStore {
    isLoggedIn: boolean = false;

    constructor(){
        makeAutoObservable(this)
    }

    toSetLoggedInTrue(): void{
        this.isLoggedIn = true
    }

    toSetLoggedInFalse(): void{
        this.isLoggedIn = false
    }
}

export default new IsLoggedInStore()