import { DateTime, Settings } from "luxon";
Settings.defaultLocale = "fr";

export const getConcertsDates = (concerts) =>
  concerts.map(({ startDate }) => {
    return {
      params: {
        concertDate: DateTime.fromISO(startDate).toFormat("dd-LL-yyyy"),
      },
    };
  });
