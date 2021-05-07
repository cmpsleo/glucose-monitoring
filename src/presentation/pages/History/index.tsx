import { Calendar } from "@/presentation/components";

import { Card } from "./components";

export function History() {
  return (
    <div>
      <h1>Hello from History</h1>
      <br />
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
    </div>
  );
}
