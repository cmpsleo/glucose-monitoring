import { useState, useMemo, useCallback, useEffect } from "react";

import { Measurement } from "@/domain/models";
import { LoadHistory } from "@/domain/usecases";
import { Calendar, Conditional } from "@/presentation/components";

import Card, { CardProps } from "./components/Card";
import Details from "./components/Details";
import * as S from "./styles";

const INITIAL_DETAILS = {
  isVisible: false,
  measurement: {} as Measurement.Item,
};

export function HistorySSR({ history }: HistorySSR.Props) {
  const [details, setDetails] = useState(INITIAL_DETAILS);
  const [display, setDisplay] = useState<CardProps["display"]>("expanded");

  function handleDisplay(display: Calendar.Display) {
    const when = {
      horizontal: "short",
      vertical: "expanded",
    } as const;

    setDisplay(when[display]);
  }

  function handleDetails(measurement?: Measurement.Item) {
    if (!measurement) {
      setDetails(INITIAL_DETAILS);
      return;
    }

    setDetails({
      isVisible: true,
      measurement,
    });
  }

  const makeCalendar = useMemo<Calendar.Calendar[]>(
    () =>
      history.map((history) => ({
        date: history.measuredAt,
        items: history.items.map((item) => ({
          content: (
            <Card
              display={display}
              onClick={() => handleDetails(item)}
              {...item}
            />
          ),
        })),
      })),
    [history, display]
  );

  return (
    <S.Container>
      <S.Content>
        <Calendar
          calendars={makeCalendar}
          currentDisplay={handleDisplay}
          loaderText="Aguarde, estamos buscando o histórico de medição."
        />
      </S.Content>

      <Conditional when={details.isVisible}>
        <Details
          onClose={() => handleDetails()}
          measurement={details.measurement}
        />
      </Conditional>
    </S.Container>
  );
}

export namespace HistorySSR {
  export type Props = {
    history: LoadHistory.Model;
  };
}
