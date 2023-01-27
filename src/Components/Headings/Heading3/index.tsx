import * as React from "react";

export interface Heading3Props {
  className?: string;
  id?: string;
  children: React.ReactNode;
}

export const Heading3 = (props: Heading3Props) => (
  <h3 className={props.className} id={props.id}>
    {props.children}
  </h3>
);
