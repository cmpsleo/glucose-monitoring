import { ReactNode } from "react";

export function Conditional({ when, children }: Conditional.Props) {
  if (!when) return null;

  return <>{children}</>;
}

export namespace Conditional {
  export type Props = {
    when: boolean;
    children: ReactNode;
  };
}
