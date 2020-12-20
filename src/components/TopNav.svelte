<script lang="ts">
    import FavoriteList from "./FavoriteList.svelte";
    import NowPlaying from "./NowPlaying.svelte";
    import { Router, Route, Link } from 'svelte-routing';

    let url = '';

    function isActive(url: string) {
        // return window.location.pathname == url;
        return false;
    }
</script>

<Router>
    <nav class="bg-gray-800">
        <div class="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
            <div class="flex items-center justify-between h-14">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <img class="h-8 w-8" src="../assets/icons/icon-192_white.png" alt="Volumio Icon">
                    </div>
                    <div class="text-gray-300 text-xl mx-5">
                        Radio Control
                    </div>
                    <div class="hidden ml-4 flex items-baseline space-x-4">

                        <Link to="/">
                            <div class:bg-gray-900="{isActive('/')}"
                                 class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                Aktuell
                            </div>
                        </Link>

                        <Link to="favorites">
                            <div class:bg-gray-900="{isActive('/favourites')}"
                                 class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                Favoriten
                            </div>
                        </Link>

                        <Link to="search">
                            <div class:bg-gray-900="{isActive('/search')}"
                                 class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                Suche
                            </div>
                        </Link>
                    </div>
                </div>
                <div class="hidden">
                    <Link to="settings">
                        <div class="text-gray-300 px-2 py-2 rounded-md text-sm text-xl">
                            <i class="fas fa-wrench"></i>
                        </div>
                    </Link>
                </div>
            </div>
        </div>

    </nav>

    <div>
        <Route path="/favorites" component="{FavoriteList}"/>
        <Route path="/search" component="{NowPlaying}"/>
        <Route path="/settings" component="{NowPlaying}"/>
        <Route path="/">
            <FavoriteList/>
        </Route>
    </div>
</Router>