<script lang="ts">
	import { container } from 'tsyringe';
import type { CurrentState } from '../models';
	import { VolumioStore } from '../services/volumio.store';

	const service = container.resolve(VolumioStore);
	const currentStatePromise: Promise<CurrentState> = service.getCurrentState();
</script>

{#await currentStatePromise}
	<p>Lade aktuellen Zustand...</p>
{:then currentState}
	<h2>Grade läuft:</h2>

    <p>Nichts...</p>
    <p>Status: {currentState.status}</p>
{:catch exception}
	<p>Fehler beim Abrufen von
		'{exception.config.url}':
		{exception.message}</p>
{/await}