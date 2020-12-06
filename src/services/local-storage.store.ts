import { injectable } from "tsyringe";

@injectable()
export class LocalStorageService {
    private readonly DEFAULT_SERVICE_ROUTE = 'http://volumio/';
    private readonly STORAGE_URL_KEY = 'service_url';
    private readonly COMMON_URL_SUFFIX = 'api/v1/';

    constructor() {}

    public getServiceUrl(): string {
        return this.getBaseUrl() + this.COMMON_URL_SUFFIX;
    }

    private getBaseUrl(): string {
        const storedUrl = localStorage[this.STORAGE_URL_KEY];
        if (storedUrl) {
            return storedUrl;
        }

        localStorage[this.STORAGE_URL_KEY] = this.DEFAULT_SERVICE_ROUTE;
        return this.DEFAULT_SERVICE_ROUTE;
    }
}