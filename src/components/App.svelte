<script lang="ts">
import FavoriteList from "./FavoriteList.svelte";
import NowPlaying from "./NowPlaying.svelte";

</script>

<main>
	<p>
		Konzept: Zwei Tabs
	</p>
		<ul>
			<li>Meine Favoriten</li>
			<li>Sendersuche</li>
		</ul>

	<p>
		Unterhalb der Tabs immer 'aktuelle Wiedergabe anzeigen'
	</p>
	<FavoriteList />

	<NowPlaying />
</main>

<style>
</style>