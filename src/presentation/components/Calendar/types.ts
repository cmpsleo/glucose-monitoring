import { ReactNode } from "react";

export type Display = "vertical" | "horizontal";

export type CalendarItem = {
  content: ReactNode;
};

export type Calendar = {
  date: Date;
  items: CalendarItem[];
};

export type CalendarProps = {
  calendars: Calendar[];
  title?: string;
};
