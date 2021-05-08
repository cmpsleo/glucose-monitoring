import { Measurement } from "@/domain/models";

import * as S from "./styles";

export function Card({ condition = "normal" }: Card.Props) {
  return (
    <S.Container condition={condition}>
      <S.Item>
        <span>103</span>mg/dL
      </S.Item>
      <S.Item>há 3 meses</S.Item>
      <S.Item>
        03:37<span>(10/02)</span>
      </S.Item>
    </S.Container>
  );
}

export namespace Card {
  export type Props = Measurement;
}
