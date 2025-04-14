import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Make sure it uses the right tsconfig
  resolve: {
    conditions: ['development'],
  },
  esbuild: {
    jsx: 'automatic', // ensures modern JSX transform
  }
});
