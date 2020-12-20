<script lang="ts">
    import { container } from 'tsyringe';
    import { RadioFavorite } from "../models";
    import { VolumioStore } from "../services/volumio.store";

    const service = container.resolve(VolumioStore);
    let currentAction: Promise<boolean>;
    export let favorit: RadioFavorite;

    function selectRadio(radio: RadioFavorite) {
        console.log(service.setCurrentRadio(radio));
    }
</script>

{#if favorit}

    <div class="favorite-item m-4 rounded border-gray-200 flex items-center" on:click={selectRadio(favorit)}>
        <div class="favorit-item__icon-wrapper">
            <i class="{favorit.icon} text-2xl"></i>
        </div>
        <div class="favorit-item__title mx-4 text-2xl">
            {favorit.title}
        </div>
    </div>
{/if}
