import { getRadioFavouritesAsync } from '../services/volumio.store';
import { createResource, For } from 'solid-js';
import FavoriteListItem from './favorite-list-item';

export default function FavoriteList() {
  const [favourites] = createResource(getRadioFavouritesAsync);

  return <>
    <span>{favourites.loading && 'Favoriten werden geladen.'}</span>

    <div>
      <For each={favourites()}>{(fav) =>
        <FavoriteListItem {...fav} />
      }</For>
    </div>
  </>;
}
