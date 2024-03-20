import {createRoot} from "react-dom/client";
import React, {CSSProperties, ReactNode} from "react";
import {Icon} from "@hilla/react-components/Icon";

export const menuComponent = (component: ReactNode) => {
  const container = document.createElement('vaadin-menu-bar-item');
  const root = createRoot(container);
  root.render(component); // TODO: Check if this is the correct way to render the component.
  return container;
}

/**
 * Creates a menu item with an icon and optional text.
 *
 * Original source: https://hilla.dev/docs/react/components/menu-bar
 * Revamped to use React hooks and functional components.
 *
 * @param iconName - The name of the icon to be displayed.
 * @param text - Optional text to be displayed next to the icon.
 * @param isChild - Specifies whether the item is a child menu item.
 * @returns The created menu item component.
 */
export const createMenuIconItem = (iconName: string, text?: string, isChild = false) => {
  const iconStyle: CSSProperties = {};
  if (isChild) {
    iconStyle.width = 'var(--lumo-icon-size-s)';
    iconStyle.height = 'var(--lumo-icon-size-s)';
    iconStyle.marginRight = 'var(--lumo-space-s)';
  }

  return menuComponent(
    <>
      <Icon icon={iconName} style={iconStyle}/>
      {text}
    </>
  );
}
