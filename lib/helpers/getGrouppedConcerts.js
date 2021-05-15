import { sortBy, groupBy } from 'lodash';
import { DateTime, Settings } from 'luxon';
Settings.defaultLocale = 'fr';

export const getGrouppedConcerts = (concerts, format, filterPassedConcerts = false) => {
  if (filterPassedConcerts)
    concerts = concerts.filter(({ startDate }) => startDate > DateTime.local().toISO());
  const sorted = sortBy(concerts, (c) => DateTime.fromISO(c.startDate));
  const grouppedByHour = groupBy(sorted, (c) => DateTime.fromISO(c.startDate).toFormat(format));
  return grouppedByHour;
};
