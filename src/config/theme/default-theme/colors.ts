import { hsl } from 'color';

import { DefaultTheme } from 'styled-components';

export const colors: DefaultTheme['colors'] = {
  grey: {
    shade100: hsl(0, 0, 96),
    shade200: hsl(0, 0, 90),
  },
  text: {
    shade100: hsl(0, 0, 70),
    shade200: hsl(0, 0, 60),
    shade300: hsl(0, 0, 30),
    shade400: hsl(0, 0, 0),
  },
  accent: {
    shade100: hsl(200, 100, 50),
  },
  secondary: {
    shade100: hsl(220, 15, 40),
  },
};
