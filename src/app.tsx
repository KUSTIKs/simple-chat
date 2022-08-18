import { FC } from 'react';

import { ThemeProvider } from 'styled-components';

import { TextInput, Icon } from '@simple-chat/components';

import { defaultTheme } from './config';

export const App: FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TextInput placeholder='placeholder' startIcon={Icon.SearchLine} />
    </ThemeProvider>
  );
};
