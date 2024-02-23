import {useTranslation} from "react-i18next";
import {MenuBar, MenuBarItemSelectedEvent} from "@hilla/react-components/MenuBar";
import React from "react";
import {useNavigate} from "react-router-dom";

export default function MainMenu() {
  const {t} = useTranslation();
  const navigate = useNavigate();

  const handleItemSelected = (e: MenuBarItemSelectedEvent) => {
    switch (e.detail.value.text) {
      case t('menu_profile'):
        navigate('/profile');
        break;
      case t('menu_settings'):
        navigate('/settings');
        break;
      case t('menu_logout'):
        console.log('Logout');
        break;
    }
  }

  return (
    <MenuBar
      onItemSelected={(event) => handleItemSelected(event)}
      theme="icon"
      items={[{
        text: t('menu_account'), /* TODO: Dynamic text */
        children: [
          {text: t('menu_profile'),},
          {text: t('menu_settings')},
          {component: 'hr'},
          {text: t('menu_logout')},
        ],
      }]}/>
  );
}
