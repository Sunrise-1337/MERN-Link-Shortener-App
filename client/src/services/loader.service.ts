import { useLoadingContext } from "../hooks/contextHooks/useLoadingContext.hook";

export class LoaderService {
    private static instance: LoaderService;
    private count: number;
    private setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;

    private constructor() {
        this.count = 0;

        this.setIsLoading = useLoadingContext()[1]
    }

    public static getInstance(): LoaderService {
        if (!LoaderService.instance) {
            LoaderService.instance = new LoaderService();
        }
        
        return LoaderService.instance;
    }

    public toShowLoader(): void{
        this.count++

        this.setIsLoading(true)
    }

    public toHideLoader(): void{
        if (this.count > 0) this.count--
        if (this.count === 0) this.setIsLoading(false)
    }
}