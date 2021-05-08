import { useMemo, useState } from "react";

import { Calendar } from "@/presentation/components";

import { Card } from "./components";
import * as S from "./styles";

export function History() {
  const [display, setDisplay] = useState<Card.Display>("expanded");

  const makeCalendar = useMemo(
    () => [
      {
        date: new Date(),
        items: [
          {
            content: <Card display={display} />,
          },
        ],
      },
    ],
    [display]
  );

  function handleDisplay(display: Calendar.Display) {
    const when = {
      horizontal: "short",
      vertical: "expanded",
    };

    setDisplay(when[display]);
  }

  return (
    <S.Container>
      <S.Content>
        <Calendar calendars={makeCalendar} currentDisplay={handleDisplay} />
      </S.Content>
    </S.Container>
  );
}
