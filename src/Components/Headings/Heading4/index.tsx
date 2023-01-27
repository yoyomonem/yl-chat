import * as React from "react";

export interface Heading4Props {
  className?: string;
  id?: string;
  children: React.ReactNode;
}

export const Heading4 = (props: Heading4Props) => (
  <h4 className={props.className} id={props.id}>
    {props.children}
  </h4>
);
