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

export function History({ loadHistory }: History.Props) {
  const [loading, setLoading] = useState<boolean>(true);
  const [details, setDetails] = useState(INITIAL_DETAILS);
  const [history, setHistory] = useState<LoadHistory.Model>([]);
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

  const fetchHistory = useCallback(async () => {
    try {
      setLoading(true);
      const history = await loadHistory.execute();
      setHistory(history);
    } finally {
      setLoading(false);
    }
  }, [loadHistory]);

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

  useEffect(() => {
    fetchHistory();
  }, [fetchHistory]);

  if (loading) return <h1>Carregando...</h1>;

  return (
    <S.Container>
      <S.Content>
        <Calendar calendars={makeCalendar} currentDisplay={handleDisplay} />
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

export namespace History {
  export type Props = {
    loadHistory: LoadHistory;
  };
}
