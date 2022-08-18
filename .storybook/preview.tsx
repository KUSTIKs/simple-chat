import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from '../src/config';
import { GlobalStyle } from '../src/global.style';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story: FC) => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={defaultTheme}>
        <Story />
      </ThemeProvider>
    </>
  ),
];
