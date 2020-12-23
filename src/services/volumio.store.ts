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

        console.log(dto);
        const state: CurrentState = {
            status: dto.status,
            albumart: dto.albumart,
            station: dto.artist
        };

        if (dto.title) {
            const titleArray = dto.title.split(' - ');
            if (titleArray.length === 2) {
                state.artist = titleArray[0];
                state.title = titleArray[1];
            } else {
                state.title = dto.title;
            }
        }

        return state;
    }

    public async setCurrentRadio(radio: RadioFavorite): Promise<boolean> {
        const bodyItem = {
            item: {
                service: 'webradio',
                type: 'webradio',
                title: radio.title,
                uri: radio.uri
            }
        };

        const base = this.storageStore.getServiceUrl();
        const url = base + 'replaceAndPlay';

        const response = await axios.post(url, bodyItem);
        return response.status === 200 && response.data.response === "success";
    }
}


