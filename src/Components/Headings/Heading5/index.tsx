import * as React from "react";

export interface Heading5Props {
  className?: string;
  id?: string;
  children: React.ReactNode;
}

export const Heading5 = (props: Heading5Props) => (
  <h5 className={props.className} id={props.id}>
    {props.children}
  </h5>
);
