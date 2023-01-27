import * as React from "react";

export interface SubscriptProps {
  className?: string;
  id?: string;
  children: React.ReactNode;
}

export const Subscript = (props: SubscriptProps) => (
  <sub className={props.className} id={props.id}>
    {props.children}
  </sub>
);
