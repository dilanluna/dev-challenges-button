/// <reference types="vitest" />
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [dts(), react()],
	build: {
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			name: 'DevChallengesButton',
		},
		rollupOptions: {
			external: ['react', 'react-dom'],
			output: { globals: { react: 'React', 'react-dom': 'ReactDOM' } },
		},
	},
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: 'src/setup-tests.ts',
	},
});
