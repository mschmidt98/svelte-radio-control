import axios from "axios";
import { injectable } from "tsyringe";
import type { BrowseList, BrowseListEntry } from "../models/dtos";
import type { RadioFavorite } from "../models";
import { LocalStorageService } from "./local-storage.store";

@injectable()
export class VolumioStore {

    constructor(private storageStore: LocalStorageService) {
    }

    public async getRadioFavouritesAsync(): Promise<RadioFavorite[]> {
        const base = this.storageStore.getServiceUrl();
        const url = base + 'browse?uri=radio/favourites';

        const response = await axios.get(url);
        const tmp: BrowseList = response.data;

        const dtoItems: BrowseListEntry[] = tmp.navigation.lists[0].items;
        const favorites: RadioFavorite[] = [];
        for (const dto of dtoItems) {
            favorites.push({
                title: dto.title,
                icon: dto.icon,
                uri: dto.uri
            });
        }
         
        return favorites;
    }
}


