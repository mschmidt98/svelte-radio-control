import axios from "axios";
import { injectable } from "tsyringe";
import type { BrowseList, BrowseListEntry } from "../models/dtos";
import { LocalStorageService } from "./local-storage.store";

@injectable()
export class VolumioStore {

    constructor(private storageStore: LocalStorageService) {
    }

    public async getFavouritesAsync(): Promise<BrowseListEntry[]> {
        const base = this.storageStore.getServiceUrl();
        const url = base + 'browse?uri=radio/favourites';

        const response = await axios.get(url);
        const tmp: BrowseList = response.data;

        return tmp.navigation.lists[0].items;
    }
}


