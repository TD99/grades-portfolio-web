import {AppLayout} from '@hilla/react-components/AppLayout.js';
import {DrawerToggle} from '@hilla/react-components/DrawerToggle.js';
import {Item} from '@hilla/react-components/Item.js';
import {Scroller} from '@hilla/react-components/Scroller.js';
import Placeholder from 'Frontend/components/placeholder/Placeholder.js';
import {MenuProps, routes, useViewMatches, ViewRouteObject} from 'Frontend/Router';
import React, {Suspense} from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import {useTranslation} from "react-i18next";
import css from './MainLayout.module.css';
import {translateIf_i18n} from "Frontend/i18n/utils";
import LanguageSelector from "Frontend/components/languageSelector/LanguageSelector";
import MainMenu from "Frontend/components/mainMenu/MainMenu";

type MenuRoute = ViewRouteObject &
  Readonly<{
    path: string;
    handle: Required<MenuProps>;
  }>;

export default function MenuOnLeftLayout() {
  const matches = useViewMatches();
  const {t} = useTranslation();
  const currentTitle = matches[matches.length - 1]?.handle?.title ?? 'Unknown';

  const menuRoutes = (routes[0]?.children || []).filter(
    (route) => route.path && route.handle && route.handle.icon && route.handle.title
  ) as readonly MenuRoute[];


  return (
    <AppLayout className="block h-full" primarySection="navbar">
      <header slot="drawer">
        <h1 className="text-l m-0">{t("name")}</h1>
      </header>
      <Scroller slot="drawer" scroll-direction="vertical">
        <nav className={css.navlist}>
          {menuRoutes.map(({path, handle: {icon, title}}) => (
            <NavLink
              className={({isActive}) => `${css.navlink} ${isActive ? css.navlink_active : ''}`}
              key={path}
              to={path}
            >
              {({isActive}) => (
                <Item key={path} selected={isActive}>
                  <span
                    className={css.navicon}
                    style={
                      {
                        'maskImage': `url('line-awesome/svg/${icon}.svg')`,
                      } as any
                    }
                    aria-hidden="true"
                  ></span>
                  {translateIf_i18n(title, t)}
                </Item>
              )}
            </NavLink>
          ))}
        </nav>
      </Scroller>
      <footer slot="drawer">
        <LanguageSelector style={{width: '100%'}}/>
      </footer>

      <DrawerToggle className={css.circle} slot="navbar" aria-label="Menu toggle"/>
      <div slot="navbar" className={css.navbardiv}>
        <h2 className="text-l m-0">
          {translateIf_i18n(currentTitle, t)}
        </h2>
        <MainMenu/>
      </div>

      <Suspense fallback={<Placeholder/>}>
        <Outlet/>
      </Suspense>
    </AppLayout>
  );
}
