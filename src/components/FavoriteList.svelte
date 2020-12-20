<script lang="ts">
    import { container } from 'tsyringe';
    import type { RadioFavorite } from '../models';
    import { VolumioStore } from '../services/volumio.store';
    import FavoriteListItem from "./FavoriteListItem.svelte";

    const service = container.resolve(VolumioStore);
    const favourites: Promise<RadioFavorite[]> = service.getRadioFavouritesAsync();
</script>

{#await favourites}
	<p>Lade Favoriten...</p>

{:then list}
    <div class="favorite-list">
        {#each list as entry}
            <FavoriteListItem bind:favorit={entry} />
            {/each}
    </div>

{:catch exception}
	<p>Fehler beim Abrufen von
		'{exception.config.url}':
		{exception.message}</p>
{/await}
