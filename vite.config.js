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
      '@simple-chat/assets': getPath('./src/assets/index.ts'),
      '@simple-chat/widgets': getPath('./src/widgets/index.ts'),
      '@simple-chat/layouts': getPath('./src/layouts/index.ts'),
      '@simple-chat/utils': getPath('./src/utils/index.ts'),
      '@simple-chat/services': getPath('./src/services/index.ts'),
      '@simple-chat/enums': getPath('./src/enums/index.ts'),
      '@simple-chat/pages': getPath('./src/pages/index.ts'),
      '@simple-chat/store': getPath('./src/store/index.ts'),
      '@simple-chat/hooks': getPath('./src/hooks/index.ts'),
      '@root': getPath('.'),
    },
  },
  plugins: [react()],
});
