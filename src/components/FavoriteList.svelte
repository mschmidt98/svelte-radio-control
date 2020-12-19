<script lang="ts">
	import { container } from 'tsyringe';
    import type { RadioFavorite } from '../models';
	import { VolumioStore } from '../services/volumio.store';

	const service = container.resolve(VolumioStore);
	const favourites: Promise<RadioFavorite[]> = service.getRadioFavouritesAsync();
</script>

{#await favourites}
	<p>Lade Favoriten...</p>
{:then list}
	<h2 class="text-lg leading-6 font-medium text-black">Favoriten: </h2>

	<ul>
		{#each list as entry}
			<li>{entry.title}</li>
		{/each}
	</ul>
{:catch exception}
	<p>Fehler beim Abrufen von
		'{exception.config.url}':
		{exception.message}</p>
{/await}
