<script lang="ts">
	import '../../node_modules/@fortawesome/fontawesome-free/css/solid.min.css';
	import '../../node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css';
// import '../../node_modules/@fortawesome/fontawesome-free/js/solid.min.js';
// import '../../node_modules/@fortawesome/fontawesome-free/js/fontawesome.min.js';


import FavoriteList from "./FavoriteList.svelte";
import NowPlaying from "./NowPlaying.svelte";
import TopNav from "./TopNav.svelte";


</script>

<TopNav></TopNav>

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
		<i class="fas fa-camera"></i>
	</p>
	<FavoriteList />

	<NowPlaying />
</main>

<style>
</style>
