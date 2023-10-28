import { makeAutoObservable } from 'mobx'

class IsLoadingStore {
    isLoading: boolean = false;

    constructor(){
        makeAutoObservable(this)
    }

    toSetLoadingInTrue(): void{
        this.isLoading = true
    }

    toSetLoadingInFalse(): void{
        this.isLoading = false
    }
}

export default new IsLoadingStore()