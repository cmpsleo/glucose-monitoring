import { ReactNode, useState, useEffect } from "react";
import { ViewListIcon, ViewGridIcon } from "@heroicons/react/solid";

import { formatDate } from "@/infra/date";
import { Conditional, Button, Loader } from "@/presentation/components";

import * as S from "./styles";

const displays = ["horizontal", "vertical"] as const;

export function Calendar({
  calendars,
  currentDisplay,
  title = "Calendar",
  isLoading = false,
  loaderText = "Loading...",
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
        <Conditional when={isLoading}>
          <S.Loader>
            <Loader /> {loaderText}
          </S.Loader>
        </Conditional>

        <Conditional when={!isLoading}>
          <S.Calendar>
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
          </S.Calendar>
        </Conditional>
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
    title?: string;
    isLoading?: boolean;
    loaderText?: string;
    calendars: Calendar[];
    currentDisplay?: (display: Display) => void;
  };
}
