import { Calendar } from "@/presentation/components";

import { Card } from "./components";
import * as S from "./styles";

export function History() {
  return (
    <S.Container>
      <S.Content>
        <Calendar
          calendars={[
            {
              date: new Date(),
              items: [
                {
                  content: <Card />,
                },
              ],
            },
          ]}
        />
      </S.Content>
    </S.Container>
  );
}
