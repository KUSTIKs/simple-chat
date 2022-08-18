import { resolve } from 'path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const getPath = (path) => resolve(process.cwd(), path);

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@simple-chat/types': getPath('./src/types/index.ts'),
      '@simple-chat/components': getPath('./src/components/index.ts'),
      '@simple-chat/config': getPath('./src/config/index.ts'),
    },
  },
  plugins: [react()],
});
