import { Measurement } from "@/domain/models";
import { Conditional } from "@/presentation/components";

import * as S from "./styles";

export function Card({
  condition = "normal",
  display = "expanded",
}: Card.Props) {
  return (
    <S.Container condition={condition} display={display}>
      <S.Item>
        <S.Heading>
          <span>103</span> mg/dL
        </S.Heading>
      </S.Item>

      <Conditional when={display === "expanded"}>
        <S.Item>há 3 meses</S.Item>
      </Conditional>

      <S.Item>
        03:37
        <Conditional when={display === "expanded"}>
          <span>(10/02)</span>
        </Conditional>
      </S.Item>

      <S.Item>
        <S.Icon src="/icons/cookie.svg" />
      </S.Item>
    </S.Container>
  );
}

export namespace Card {
  export type Display = "short" | "expanded";

  export type Props = Measurement & {
    display: Display;
  };
}
