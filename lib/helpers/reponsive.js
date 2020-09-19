import React from "react";
import { useMediaQuery } from "react-responsive";

export const isDesktopOrLaptop = () => {
  return useMediaQuery({
    query: "(min-device-width: 1224px)",
  });
};
