import router from 'Frontend/Router';
import {RouterProvider} from 'react-router-dom';
import i18n from "i18next";
import {getLanguageFromStorage} from './i18n/utils';

export default function App() {
  i18n.changeLanguage(getLanguageFromStorage()).then();

  return <RouterProvider router={router}/>;
}
