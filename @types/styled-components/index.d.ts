import Color from 'color';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      grey: {
        share100: Color;
        share200: Color;
      };
      text: {
        share100: Color;
        share200: Color;
        share300: Color;
        share400: Color;
      };
      accent: {
        shade100: Color;
      };
      secondary: {
        shade100: Color;
      };
    };
  }
}
