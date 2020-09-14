import { rootUrl } from "./constants";

export const getAllConcerts = async () => {
  const res = await fetch(`${rootUrl}/api/concerts`);
  const concerts = await res.json();
  return concerts;
};
