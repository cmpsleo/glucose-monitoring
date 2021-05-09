import { ReactNode, useState, useEffect } from "react";
import { ViewListIcon, ViewGridIcon } from "@heroicons/react/solid";

import { Button } from "@/presentation/components";
import { formatDate } from "@/presentation/utils";

import * as S from "./styles";

const displays = ["horizontal", "vertical"] as const;

export function Calendar({
  calendars,
  currentDisplay,
  title = "Calendário",
}: Calendar.Props) {
  const [display, setDisplay] = useState<Calendar.Display>("horizontal");

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
          const date = formatDate(calendar.date);

          return (
            <S.Group key={index}>
              <S.Head>
                <S.Date>
                  <span>{date.date()}</span>
                  <span>{date.format("MMMM")}</span>
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

  export type CalendarItem = {
    content: ReactNode;
  };

  export type Calendar = {
    date: Date | string;
    items: CalendarItem[];
  };

  export type Props = {
    calendars: Calendar[];
    title?: string;
    currentDisplay?: (display: Display) => void;
  };
}
