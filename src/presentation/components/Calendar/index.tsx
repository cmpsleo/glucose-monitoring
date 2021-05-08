import { useState, useEffect } from "react";
import { ViewListIcon, ViewGridIcon } from "@heroicons/react/solid";

import { Button } from "@/presentation/components";

import * as S from "./styles";
import { CalendarProps, displays } from "./types";

export function Calendar({
  calendars,
  currentDisplay,
  title = "Calendário",
}: Calendar.Props) {
  const [display, setDisplay] = useState<Calendar.Display>("vertical");

  function handleDisplay(display: Calendar.Display) {
    setDisplay(display);
  }

  useEffect(() => {
    if (currentDisplay) currentDisplay(display);
  }, [display, currentDisplay]);

  return (
    <S.Container display={display}>
      <S.Header>
        <S.Title>{title}</S.Title>

        <S.Week>20 Fevereiro - 27 Fevereiro</S.Week>

        <S.Actions>
          {displays.map((mode, index) => (
            <Button
              key={index}
              icon={
                {
                  horizontal: <ViewGridIcon />,
                }[mode] || <ViewListIcon />
              }
              disabled={display === mode}
              onClick={() => handleDisplay(mode)}
            />
          ))}
        </S.Actions>
      </S.Header>

      <S.Body>
        {calendars.map((calendar, index) => {
          return (
            <S.Group key={index}>
              <S.Head>
                <S.Date>
                  <span>20</span>
                  <span>janeiro</span>
                </S.Date>
              </S.Head>

              <S.List>
                {calendar.items.map((item, index) => (
                  <S.Item key={index}>{item.content}</S.Item>
                ))}
              </S.List>
            </S.Group>
          );
        })}
      </S.Body>
    </S.Container>
  );
}

export namespace Calendar {
  export type Display = typeof displays[number];

  export type Props = CalendarProps;
}
