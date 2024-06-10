import { defineConfig } from 'vite';
import path from "path";
import react from '@vitejs/plugin-react-swc';
import replace from '@rollup/plugin-replace';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
    },
  },
  plugins: [
    react(),
    replace({
      'process.env.REACT_APP_NOVAPOSHTA_API_KEY': JSON.stringify(process.env.REACT_APP_NOVAPOSHTA_API_KEY),
      preventAssignment: true,
    }),
  ],
});




