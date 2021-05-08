import { ButtonHTMLAttributes } from "react";
import Ink from "react-ink";

import { Conditional } from "@/presentation/components";

import * as S from "./styles";

export function Button({
  children,
  kind = "primary",
  size = "medium",
  icon,
  ...props
}: Button.Props) {
  return (
    <S.Container size={size} kind={kind} hasIcon={!!icon} {...props}>
      <Ink />

      <Conditional when={!!icon}>
        <S.Icon>{icon}</S.Icon>
      </Conditional>

      <Conditional when={!!children}>
        <S.Content>{children}</S.Content>
      </Conditional>
    </S.Container>
  );
}

export namespace Button {
  export type Element = ButtonHTMLAttributes<HTMLButtonElement>;

  export type Kinds = "primary" | "secondary";

  export type Sizes = "small" | "medium";

  export type Props = Element & {
    kind?: Kinds;
    size?: Sizes;
    icon?: JSX.Element;
  };
}
