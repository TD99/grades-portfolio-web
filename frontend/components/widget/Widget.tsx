import React from "react";
import "./Widget.css";
import Draggable from "react-draggable";

interface WidgetProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  header?: React.ReactNode;
  children: React.ReactNode;

  [key: string]: any;
}

const Widget: React.FC<WidgetProps> = ({title, subtitle, header, children, ...props}) => {
  return (
    <Draggable bounds="parent">
      <div className="widget-root">
        <div className="widget-header-root">
          <div className="widget-header">
            <h4 className="widget-title">{title}</h4>
            <small className="widget-subtitle">{subtitle}</small>
          </div>
          <div className="widget-pinned">
            {header}
          </div>
        </div>
        <div className="widget-content" {...props}>
          {children}
        </div>
      </div>
    </Draggable>
  );
}

export default Widget;