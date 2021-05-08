import { ReactNode } from "react";

export const displays = ["vertical", "horizontal"] as const;

export type Display = typeof displays[number];

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
  currentDisplay?: (display: Display) => void;
};
