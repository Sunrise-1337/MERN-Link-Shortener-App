import { InfoResponseInterface } from "./info-response.interface";

export interface LoginResponseInterface extends InfoResponseInterface {
    token: string,
    userId: string,
}