import * as React from "react";

export interface ParagraphProps {
  className?: string;
  id?: string;
  children: React.ReactNode;
}

export const Paragraph = (props: ParagraphProps) => (
  <p className={props.className} id={props.id}>
    {props.children}
  </p>
);
