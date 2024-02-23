import MainLayout from 'Frontend/views/MainLayout.js';
import {lazy} from 'react';
import {createBrowserRouter, IndexRouteObject, NonIndexRouteObject, useMatches} from 'react-router-dom';
import StartView from './views/start/StartView';

const GradesView = lazy(async () => import('Frontend/views/grades/GradesView'));
const HelpView = lazy(async () => import('Frontend/views/help/HelpView'));
const ProfileView = lazy(async () => import('Frontend/views/profile/ProfileView'));
const SettingsView = lazy(async () => import('Frontend/views/settings/SettingsView'));

// Types
export type MenuProps = Readonly<{
  icon?: string;
  title?: string;
}>;

export type ViewMeta = Readonly<{ handle?: MenuProps }>;

type Override<T, E> = Omit<T, keyof E> & E;

export type IndexViewRouteObject = Override<IndexRouteObject, ViewMeta>;
export type NonIndexViewRouteObject = Override<
  Override<NonIndexRouteObject, ViewMeta>,
  {
    children?: ViewRouteObject[];
  }
>;
export type ViewRouteObject = IndexViewRouteObject | NonIndexViewRouteObject;

type RouteMatch = ReturnType<typeof useMatches> extends (infer T)[] ? T : never;

export type ViewRouteMatch = Readonly<Override<RouteMatch, ViewMeta>>;

// Hooks
export const useViewMatches = useMatches as () => readonly ViewRouteMatch[];

// Routes
export const routes: readonly ViewRouteObject[] = [
  {
    element: <MainLayout/>,
    handle: {icon: 'null', title: 'Main'},
    children: [
      {
        path: '/',
        element: <StartView/>,
        handle: {icon: 'home-solid', title: "i18n:menu_start"}
      },
      {
        path: '/grades',
        element: <GradesView/>,
        handle: {icon: 'graduation-cap-solid', title: "i18n:menu_grades"}
      },
      {
        path: '/help',
        element: <HelpView/>,
        handle: {icon: 'question-circle-solid', title: "i18n:menu_help"}
      },
      {
        path: '/profile',
        element: <ProfileView/>,
        handle: {title: "i18n:menu_profile"}
      },
      {
        path: '/settings',
        element: <SettingsView/>,
        handle: {title: "i18n:menu_settings"}
      }
    ],
  },
];

const router = createBrowserRouter([...routes]);
export default router;
