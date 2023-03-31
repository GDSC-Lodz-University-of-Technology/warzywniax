import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgrPlugin from 'vite-plugin-svgr';
import viteTsconfigPaths from 'vite-tsconfig-paths';

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  plugins: [react(), svgrPlugin(), viteTsconfigPaths()],
});
