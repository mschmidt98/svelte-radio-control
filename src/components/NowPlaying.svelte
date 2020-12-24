<script lang="ts">
    import { container } from 'tsyringe';
    import type { CurrentState } from '../models';
    import { VolumioStore } from '../services/volumio.store';
    import Slider from '@smui/slider';
    import Fab from '@smui/fab';

    const service = container.resolve(VolumioStore);
    let currentStatePromise: Promise<CurrentState>;

    function refreshState() {
        currentStatePromise = service.getCurrentState();
        currentStatePromise.then(state => volume = state.volume);
    }

    function volumeChange() {
        service.setVolume(volume);
        console.log(volume);
    }

    function changePlayState(state: 'toggle' | 'stop') {
        service.setState(state);
    }

    refreshState();
    let volume: number = 100;
</script>

<div class="bg-gray-600 pt-2">

    {#await currentStatePromise}
        <p>Lade aktuellen Zustand...</p>
    {:then currentState}

        <div class="flex">
            <div class="rounded px-2 mt-2 relative">
                <!--suppress HtmlUnknownTarget -->
                <img class="rounded-xl" height="145" width="145" alt="Albumcover" src="{currentState.albumart}"/>
                <div class="absolute transform-half">
                    <Fab on:click={() => changePlayState('play')}><i
                            class="fas fa-{currentState.status === 'play' ? 'pause' : 'play'}"></i></Fab>
                </div>
            </div>
            <div class="text-md text-gray-300 leading-7">
                <p>Titel: {currentState.title}</p>
                <p>Artist: {currentState.artist}</p>
                <p>Sender: {currentState.station}</p>
                <p>Status: {currentState.status}</p>
                <p>Lautstärke: {currentState.volume}</p>
            </div>
        </div>


        <!-- Volume -->
        <div class="flex items-center text-gray-300">
            <div class="ml-3 mr-4">
                <i class="fas fa-volume-down"></i>
            </div>
            <Slider on:mouseup={volumeChange} bind:value={volume} min={0} max={100} step={1} determined/>
            <div class="ml-6 mr-3">
                <i class="fas fa-volume-up"></i>
            </div>
        </div>

    {:catch exception}
        <p>Fehler beim Abrufen von
            '{exception.config.url}':
            {exception.message}</p>
    {/await}

    <!-- Play-Pause-Stop -->
    <div class="flex justify-center items-center mt-3">
        <Fab on:click={() => changePlayState('stop')} mini><i class="fas fa-stop"></i></Fab>
        <Fab on:click={() => changePlayState('play')} color="primary"><i class="fas fa-play"></i></Fab>
        <Fab on:click={() => changePlayState('pause')} mini><i class="fas fa-pause"></i></Fab>
    </div>
</div>

<style type="text/scss">
  .transform-half {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
