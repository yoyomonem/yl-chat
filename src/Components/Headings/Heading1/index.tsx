import * as React from "react";

export interface Heading1Props {
  className?: string;
  id?: string;
  children: React.ReactNode;
}

export const Heading1 = (props: Heading1Props) => (
  <h1 className={props.className} id={props.id}>
    {props.children}
  </h1>
);
