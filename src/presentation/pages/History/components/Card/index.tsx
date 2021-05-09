import { useRef, memo } from "react";

import { Conditional } from "@/presentation/components";
import { formatDate } from "@/presentation/utils";

import * as S from "./styles";
import { CardProps } from "./types";

function Card({
  mealContext = "Before",
  display = "expanded",
  ...props
}: CardProps) {
  const date = useRef(formatDate(props.measuredAt));

  return (
    <S.Container mealContext={mealContext} display={display} {...props}>
      <S.Item>
        <S.Heading>
          <span>{props.concentration}</span> {props.concentrationUnit}
        </S.Heading>
      </S.Item>

      <Conditional when={display === "expanded"}>
        <S.Item>{date.current.fromNow()}</S.Item>
      </Conditional>

      <S.Item>
        {date.current.format("HH:mm")}
        <Conditional when={display === "expanded"}>
          <span>({date.current.format("DD/MM")})</span>
        </Conditional>
      </S.Item>

      <S.Item>
        <S.Icon
          src={
            {
              Before: "/icons/cookie-eated.svg",
            }[mealContext] || "/icons/cookie.svg"
          }
        />
      </S.Item>
    </S.Container>
  );
}

export * from "./types";

export default memo(Card);
