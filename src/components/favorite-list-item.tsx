import { RadioFavorite } from '../models';
import { setCurrentRadio } from '../services/volumio.store';

export default function FavoriteListItem(favorite: RadioFavorite) {

  return <>
    <div class="m-4 rounded border-gray-200 flex items-center" onClick={() => selectRadio(favorite)}>
      <div>
        <i class={favorite.icon + ' text-2xl'}></i>
      </div>
      <div class="mx-4 text-2xl">
        {favorite.title}
      </div>
    </div>
  </>;
}

async function selectRadio(radio: RadioFavorite): Promise<boolean> {
  return await setCurrentRadio(radio);
}
