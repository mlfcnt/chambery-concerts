import { sortBy, groupBy } from "lodash";
import { DateTime, Settings } from "luxon";
import { ddLLyyyy } from "../constants/dateFormat";
Settings.defaultLocale = "fr";

export const useGrouppedConcerts = (
  concerts,
  format,
  filterPassedConcerts = false
) => {
  if (filterPassedConcerts)
    concerts = concerts.filter(
      (c) =>
        DateTime.fromISO(c.startDate).toFormat(ddLLyyyy) >=
        DateTime.local().toFormat(ddLLyyyy)
    );
  const sorted = sortBy(concerts, (c) => DateTime.fromISO(c.startDate));
  const grouppedByHour = groupBy(sorted, (c) =>
    DateTime.fromISO(c.startDate).toFormat(format)
  );
  return grouppedByHour;
};
