<script lang="ts">
	import { container } from 'tsyringe';
	import type { Entry } from './models';
	import { VolumioStore } from './services/volumio.store';

	const service = container.resolve(VolumioStore);
	let favourites: Promise<Entry[]> = service.getFavouritesAsync();
</script>

<main>
{#await favourites}
	<p>loading...</p>
{:then list}
	{#each list as entry}
		{entry.title}
	{/each}

{/await}
</main>

<style>
</style>