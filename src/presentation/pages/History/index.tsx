import { useState, useMemo, useCallback, useEffect } from "react";

import { Calendar } from "@/presentation/components";
import { LoadHistory } from "@/domain/usecases";

import Card, { CardProps } from "./components/Card";
import * as S from "./styles";

export function History({ loadHistory }: History.Props) {
  const [loading, setLoading] = useState<boolean>(true);
  const [history, setHistory] = useState<LoadHistory.Model>([]);
  const [display, setDisplay] = useState<CardProps["display"]>("expanded");

  function handleDisplay(display: Calendar.Display) {
    const when = {
      horizontal: "short",
      vertical: "expanded",
    } as const;

    setDisplay(when[display]);
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
          content: <Card display={display} {...item} />,
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
    </S.Container>
  );
}

export namespace History {
  export type Props = {
    loadHistory: LoadHistory;
  };
}
