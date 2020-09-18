import { DateTime, Settings } from "luxon";
import { ddLLyyyy } from "./constants/dateFormat";
Settings.defaultLocale = "fr";

export const getConcertsDates = (concerts) =>
  concerts.map(({ startDate }) => {
    return {
      params: {
        concertDate: DateTime.fromISO(startDate).toFormat(ddLLyyyy),
      },
    };
  });
