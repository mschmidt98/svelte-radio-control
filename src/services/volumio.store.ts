import { BrowseList, BrowseListEntry, CurrentState, RadioFavorite, StateDto } from '../models';
import { getServiceUrl } from './local-storage.store';

export async function getRadioFavouritesAsync(): Promise<RadioFavorite[]> {
  const base = getServiceUrl();
  const url = base + 'browse?uri=radio/favourites';

  const response = await fetch(url);
  const tmp: BrowseList = await response.json();

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

export async function getCurrentState(): Promise<CurrentState> {

  const base = getServiceUrl();
  const url = base + 'getState';

  const response = await fetch(url);
  const dto: StateDto = await response.json();

  const state: CurrentState = {
    status: dto.status,
    albumart: dto.albumart,
    station: dto.artist,
    volume: dto.volume,
    mute: dto.mute
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

export async function setCurrentRadio(radio: RadioFavorite): Promise<boolean> {
  const bodyItem = {
    item: {
      service: 'webradio',
      type: 'webradio',
      title: radio.title,
      uri: radio.uri
    }
  };

  const base = getServiceUrl();
  const url = base + 'replaceAndPlay';

  // const response = await axios.post(url, bodyItem);
  const response = await post(url, bodyItem);
  return isOkResponse(response);
}

export async function setVolume(volume: number): Promise<boolean> {
  const base = getServiceUrl();
  const url = base + `commands/?cmd=volume&volume=${volume}`;

  const response = await fetch(url);
  console.log(response);
  return isOkResponse(response);
}

export async function setState(state: 'play' | 'pause' | 'stop' | 'toggle'): Promise<boolean> {
  const base = getServiceUrl();
  const url = base + `commands/?cmd=${state}`;

  const response = await fetch(url);
  return isOkResponse(response);

}

function isOkResponse(response: Response): boolean {
  return response.status === 200 && response.ok;
}

async function post(url: string, body: unknown): Promise<Response> {
  const options = {
    method: 'POST',
    mode: 'cors',
    cache: 'default',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(body)
  };

  return await fetch(url, options);
}
