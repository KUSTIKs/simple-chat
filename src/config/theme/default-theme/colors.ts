import { hsl } from 'color';

import { DefaultTheme } from 'styled-components';

export const colors: DefaultTheme['colors'] = {
  grey: {
    share100: hsl(0, 0, 97),
    share200: hsl(0, 0, 90),
  },
  text: {
    share100: hsl(0, 0, 70),
    share200: hsl(0, 0, 60),
    share300: hsl(0, 0, 30),
    share400: hsl(0, 0, 0),
  },
  accent: {
    shade100: hsl(200, 100, 50),
  },
  secondary: {
    shade100: hsl(220, 15, 40),
  },
};
