import { useState } from "react";

import * as S from "./styles";
import { CalendarProps, Display } from "./types";

export function Calendar({ calendars, title = "Calendário" }: CalendarProps) {
  const [display, setDisplay] = useState<Display>("horizontal");

  return (
    <S.Container display={display}>
      <S.Header>
        <S.Title>{title}</S.Title>

        <S.Week>20 Fevereiro - 27 Fevereiro</S.Week>

        <S.Actions>
          <button onClick={() => setDisplay("vertical")}>Vertical</button>
          <button onClick={() => setDisplay("horizontal")}>Horizontal</button>
        </S.Actions>
      </S.Header>

      <S.Body>
        {calendars.map((calendar, index) => {
          const date = calendar.date;

          return (
            <S.Group key={index}>
              <S.Head>
                <S.Date>
                  <span>20</span>
                  <span>janeiro</span>
                </S.Date>
              </S.Head>

              {calendar.items.map((item, index) => (
                <S.Item key={index}>{item.content}</S.Item>
              ))}
            </S.Group>
          );
        })}
      </S.Body>
    </S.Container>
  );
}
