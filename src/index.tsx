/* @refresh reload */
import 'windi.css';

import { render } from 'solid-js/web';
import App from './components/app';

render(
  () => (<App/>),
  document.getElementById('root') as HTMLElement
);
