import router from 'Frontend/Router';
import {RouterProvider} from 'react-router-dom';
import i18n from "i18next";
import {getLanguageFromStorage} from './i18n/utils';
import {AuthProvider} from "Frontend/auth";

export default function App() {
  i18n.changeLanguage(getLanguageFromStorage()).then();

  return (
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  );
}
