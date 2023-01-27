import * as React from "react";

export interface Heading2Props {
  className?: string;
  id?: string;
  children: React.ReactNode;
}

export const Heading2 = (props: Heading2Props) => (
  <h2 className={props.className} id={props.id}>
    {props.children}
  </h2>
);
