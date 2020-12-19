import axios from "axios";
import { injectable } from "tsyringe";
import type { CurrentState, RadioFavorite } from "../models";
import type { BrowseList, BrowseListEntry, StateDto } from "../models/dtos";
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

    public async getCurrentState(): Promise<CurrentState> {

        const base = this.storageStore.getServiceUrl();
        const url = base + 'getState';

        const response = await axios.get(url);
        const dto: StateDto = response.data;

        const state: CurrentState = {
            status: dto.status
        };
        return state;
    }
}


