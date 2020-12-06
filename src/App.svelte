<script lang="ts">
	import { container } from 'tsyringe';
	import type { Entry } from './models';
	import { VolumioStore } from './services/volumio.store';

	const service = container.resolve(VolumioStore);
	let favourites: Promise<Entry[]> = service.getFavouritesAsync();
</script>

<main>
{#await favourites}
	<p>Lade Favoriten...</p>
{:then list}
	<h2>Favoriten: </h2>

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
</main>

<style>
</style>