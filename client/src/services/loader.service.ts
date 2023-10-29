import isLoadingStore from "../stores/isLoading.store";

export class LoaderService {
    private static instance: LoaderService;
    private count: number;

    private constructor() {
        this.count = 0;
    }

    public static getInstance(): LoaderService {
        if (!LoaderService.instance) {
            LoaderService.instance = new LoaderService();
        }
        
        return LoaderService.instance;
    }

    public toShowLoader(): void{
        this.count++

        isLoadingStore.toSetLoadingTrue()
    }

    public toHideLoader(): void{
        if (this.count > 0) this.count--
        if (this.count === 0) isLoadingStore.toSetLoadingFalse()
    }
}