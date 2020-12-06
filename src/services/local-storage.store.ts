import { injectable } from "tsyringe";

@injectable()
export class LocalStorageService {
    private readonly DEFAULT_SERVICE_ROUTE = 'http://volumio/';

    constructor() {}

    public getServiceUrl(): string {
        return this.DEFAULT_SERVICE_ROUTE;
    }
}