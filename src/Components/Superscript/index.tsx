import * as React from "react";

export interface SuperscriptProps {
  className?: string;
  id?: string;
  children: React.ReactNode;
}

export const Superscript = (props: SuperscriptProps) => (
  <sup className={props.className} id={props.id}>
    {props.children}
  </sup>
);
