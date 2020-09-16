export const useSplittedDate = (date) => {
  const splitted = date?.split("-") || [];
  const day = splitted[0];
  const month = splitted[1];
  const year = splitted[2];
  return { day, month, year };
};
