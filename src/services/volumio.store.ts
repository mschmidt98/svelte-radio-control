import { injectable } from "tsyringe";
import type { Entry } from "../models";
import { LocalStorageService } from "./local-storage.store";

@injectable()
export class VolumioStore {

    constructor(private storageStore: LocalStorageService) {
    }

    public async getFavouritesAsync(): Promise<Entry[]> {
        return [{
            icon: 'fa fa-microphone',
            title: 'Radio Bob',
            uri: '',
            type: 'webradio'
        }, {
            icon: 'fa fa-microphone',
            title: 'Radio Bob - Metal',
            uri: '',
            type: 'webradio'
        }]; 
    }
}


