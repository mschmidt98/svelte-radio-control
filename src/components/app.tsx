import FavoriteList from './favorite-list';
import TopNav from './top-nav';
import NowPlaying from './now-playing';

export default function App() {

  return <>
    <main class="bg-zink-900 flex-grow">
      <TopNav/>
      <NowPlaying/>
      <FavoriteList/>
    </main>
  </>;
}
