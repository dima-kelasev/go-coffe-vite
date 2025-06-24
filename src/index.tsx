import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RecoilRoot } from 'recoil';
import { YMaps } from '@pbe/react-yandex-maps';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <YMaps>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </YMaps>
);
