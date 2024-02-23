import {createRoot} from 'react-dom/client';
import App from './App';
import i18n from "./i18n/config";
import {I18nextProvider} from 'react-i18next';

const root = createRoot(document.getElementById('outlet')!);
root.render(
  <I18nextProvider i18n={i18n}>
    <App/>
  </I18nextProvider>
);
