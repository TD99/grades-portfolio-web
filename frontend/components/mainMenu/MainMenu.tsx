import {useTranslation} from "react-i18next";
import {MenuBar, MenuBarItemSelectedEvent} from "@hilla/react-components/MenuBar";
import React from "react";
import {useNavigate} from "react-router-dom";
import {menuComponent} from "Frontend/themes/utils";
import {Avatar} from "@hilla/react-components/Avatar";
import {useAuth} from "Frontend/auth";

export default function MainMenu() {
  const {t} = useTranslation();
  const navigate = useNavigate();
  const auth = useAuth();

  const basicChildren = [
    {text: t('menu_profile'),},
    {text: t('menu_settings')}
  ];

  const loggedInChildren = [
    {component: 'hr'},
    {text: t('menu_logout')}
  ]

  const AnonymousChildren = [
    {component: 'hr'},
    {text: t('menu_login')}
  ];

  const handleItemSelected = (e: MenuBarItemSelectedEvent) => {
    switch (e.detail.value.text) {
      case t('menu_profile'):
        navigate('/profile');
        break;
      case t('menu_settings'):
        navigate('/settings');
        break;
      case t('menu_logout'):
        auth.logout();
        break;
    }
  }

  return (
    <MenuBar
      onItemSelected={(event) => handleItemSelected(event)}
      items={[{
        component: menuComponent(
          <div className="flex items-center gap-s">
            <Avatar className="h-s w-s" tabIndex={-1} name={auth.state?.user?.name || "Anonymous"}/>
            {auth.state?.user?.name || "Anonymous"}
          </div>),
        children: auth.state?.user ? [...basicChildren, ...loggedInChildren] : [...basicChildren, ...AnonymousChildren]
      }]}/>
  );
}
