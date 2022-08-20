import Color from 'color';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      grey: {
        shade100: Color;
        shade200: Color;
      };
      text: {
        shade100: Color;
        shade200: Color;
        shade300: Color;
        shade400: Color;
      };
      accent: {
        shade100: Color;
        shade200: Color;
      };
      secondary: {
        shade100: Color;
      };
    };
    widths: {
      sidebar: string;
      messageInput: string;
      maxMessage: string;
    };
  }
}
