import { memo } from "react";

import { Conditional, Tooltip } from "@/presentation/components";
import { MealContexts } from "@/domain/models";

import * as S from "./styles";
import { CardProps } from "./types";

function Card({
  mealContext = "Before",
  display = "expanded",
  ...props
}: CardProps) {
  return (
    <S.Container mealContext={mealContext} display={display} {...props}>
      <S.Item>
        <S.Heading>
          <span>{props.concentration}</span> {props.concentrationUnit}
        </S.Heading>
      </S.Item>

      <Conditional when={display === "expanded"}>
        <S.Item>há 3 meses</S.Item>
      </Conditional>

      <S.Item>
        06:30
        <Conditional when={display === "expanded"}>
          <span>(28/03)</span>
        </Conditional>
      </S.Item>

      <S.Item>
        <Tooltip content={MealContexts[mealContext]} placement="bottom">
          <S.Icon
            src={
              {
                Before: "/icons/cookie-eated.svg",
              }[mealContext] || "/icons/cookie.svg"
            }
          />
        </Tooltip>
      </S.Item>
    </S.Container>
  );
}

export * from "./types";

export default memo(Card);
