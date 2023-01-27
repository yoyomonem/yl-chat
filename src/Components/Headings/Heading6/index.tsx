import * as React from "react";

export interface Heading6Props {
  className?: string;
  id?: string;
  children: React.ReactNode;
}

export const Heading6 = (props: Heading6Props) => (
  <h6 className={props.className} id={props.id}>
    {props.children}
  </h6>
);
