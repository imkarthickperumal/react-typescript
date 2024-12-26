import React from "react";

type StyleContainerProps = {
  styles: React.CSSProperties;
};
export const StyleContainer = (props: StyleContainerProps) => {
  return <div style={props.styles}>Text Area</div>;
};
