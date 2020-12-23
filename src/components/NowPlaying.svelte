<script lang="ts">
    import { container } from 'tsyringe';
    import type { CurrentState } from '../models';
    import { VolumioStore } from '../services/volumio.store';
    // import { Slider } from '@smui/slider/bare';
    // import '@smui/slider/bare.css';
    import Button from '@smui/button';
    import Checkbox from '@smui/checkbox';

    const service = container.resolve(VolumioStore);
    let currentStatePromise: Promise<CurrentState>;
    let isChecked: boolean = true;

    function refreshState() {
        currentStatePromise = service.getCurrentState();
    }

    refreshState();
    let volume: number = 100;
</script>

<div class="bg-gray-600 py-2">

    {#await currentStatePromise}
        <p>Lade aktuellen Zustand...</p>
    {:then currentState}

        <div class="flex">
            <div class="rounded px-2 mt-2">
                <img class="rounded-xl" height="145" width="145" alt="Albumcover" src="{currentState.albumart}"/>
            </div>
            <div class="text-md text-gray-300 leading-7">
                <p>Titel: {currentState.title}</p>
                <p>Artist: {currentState.artist}</p>
                <p>Sender: {currentState.station}</p>
                <p>Status: {currentState.status}</p>
            </div>
        </div>

    {:catch exception}
        <p>Fehler beim Abrufen von
            '{exception.config.url}':
            {exception.message}</p>
    {/await}

<!--    <Slider bind:value={volume} />-->
    <Button on:click={() => refreshState()}>MATERIAL</Button>

    <Checkbox bind:checked={isChecked}>Auto Refresh</Checkbox>

    <button class="text-base font-medium rounded-lg p-3 bg-rose-500 text-white" on:click={() => refreshState()}>
        Refresh
    </button>
</div>
