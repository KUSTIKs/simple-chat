import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './app';
import { GlobalStyle } from './global.style';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>
);
