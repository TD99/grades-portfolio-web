import router from 'Frontend/Router';
import {RouterProvider} from 'react-router-dom';
import i18n from "i18next";
import {getLanguageFromStorage} from './i18n/utils';
import {AuthProvider} from "Frontend/auth";
import {prepareCharts} from "Frontend/components/charts/Charts";

export default function App() {
  i18n.changeLanguage(getLanguageFromStorage()).then();
  prepareCharts();

  return (
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  );
}
