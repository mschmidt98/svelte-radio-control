import { createResource, Show } from 'solid-js';
import { getCurrentState, setState, setVolume } from '../services/volumio.store';
import { PlayState } from '../models';

export default function NowPlaying() {
  const [state] = createResource(getCurrentState);
  return <>

    <div class="bg-gray-600 pt-2">
      <Show
        when={!state.loading}
        fallback={<p>'Lade aktuellen Zustand...'</p>}>
        <div class="flex">
          <div class="rounded px-2 mt-2 relative">
            <img class="rounded-xl" height="145" width="145" alt="Albumcover" src={state().albumart}/>
            <div class="absolute transform-half p-5 rounded-full bg-sky-700 cursor-pointer"
                 onclick={togglePlayState}>
              <i id="play-icon" class={getPlayIcon(state().status)}></i>
            </div>
          </div>

          <div class="text-md text-gray-300 leading-7">
            <p>Titel: {state().title}</p>
            <p>Artist: {state().artist}</p>
            <p>Sender: {state().station}</p>
            <p>Status: {state().status}</p>
            <p id="volume-label">Lautstärke: {state().volume}</p>
          </div>
        </div>

        {/*Volume*/}
        <div class="flex items-center text-gray-300">
          <div class="m-3">
            <i class="fa-solid fa-volume-down"></i>
          </div>
          <input class="w-full" id="volume-slider" type="range" title="Volume"
                 onMouseUp={onVolumeChange} value={state().volume} min={0} max={100}/>
          <div class="m-3">
            <i class="fas fa-volume-up"></i>
          </div>
        </div>
      </Show>

    </div>
  </>;
}

function onVolumeChange() {
  // @ts-ignore
  const volume = document.getElementById('volume-slider').value as number;
  document.getElementById('volume-label').innerText = 'Lautstärke: ' + volume;
  // this.volume = volume;
  setVolume(volume).then();
}

function getPlayIcon(status: PlayState) {
  const prefix = 'fa-solid fa-2xl text-white fa-';
  return status === 'play'
    ? prefix + 'pause'
    : prefix + 'play';
}

async function togglePlayState() {
  const stateChanged = await setState('toggle');
  if (!stateChanged) {
    return;
  }

  const icon = document.getElementById('play-icon');
  console.log(icon.className);
  const playState = icon.className.endsWith('pause')
    ? 'pause'
    : 'play';
  icon.className = getPlayIcon(playState);
}
