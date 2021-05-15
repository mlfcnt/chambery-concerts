import { useMediaQuery as UseMediaQuery } from 'react-responsive';

export const isDesktopOrLaptop = () => {
  return UseMediaQuery({
    query: '(min-device-width: 1224px)',
  });
};
