import { formatDate } from ".";

describe("formatDate considering that default locale and UTC", () => {
  it("Should return the day", () => {
    const date = formatDate("2021-03-28T06:37:32.018Z").date();
    expect(date).toBe(28);
  });

  it("Should return full month name correctly", () => {
    const date = formatDate("2021-03-28T06:37:32.018Z").format("MMMM");
    expect(date).toBe("March");
  });

  it("Should return hour and minute formated", () => {
    const date = formatDate("2021-03-28T06:37:32.018Z").format("HH:mm");
    expect(date).toBe("06:37");
  });

  it("Should return the string of relative time from now.", () => {
    const date = formatDate("2021-03-28T06:37:32.018Z");
    const format = date.fromNow();

    expect(format).toBe(formatDate(date).fromNow());
  });

  it("Should return day and month", () => {
    const date = formatDate("2021-03-28T06:37:32.018Z").format("DD/MM");
    expect(date).toBe("28/03");
  });
});
