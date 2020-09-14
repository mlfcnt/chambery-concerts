import { DateTime, Settings } from "luxon";
Settings.defaultLocale = "fr";
import { groupBy } from "lodash";

export const groupConcertsByDate = (concerts) =>
  groupBy(concerts, (c) => DateTime.fromISO(c.startDate).startOf("day"));
export const capitalizeFirstLetter = (string, type) => {
  if (type === "sentence") {
    const stringtoUppercase = string.split(" ")[0];
    return (
      stringtoUppercase.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
    );
  }
  const newString = string.toLowerCase();
  return newString.charAt(0).toUpperCase() + newString.slice(1);
};
