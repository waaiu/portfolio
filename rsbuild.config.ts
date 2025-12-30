import path from 'path';
import { defineConfig, loadEnv } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

const { parsed } = loadEnv();

export default defineConfig({
    plugins: [pluginReact()],
    html: {
        template: './index.html',
    },
    source: {
        entry: {
            index: './src/index.tsx',
        },
        define: {
            'process.env.API_KEY': JSON.stringify(parsed?.GEMINI_API_KEY),
        },
    },
    server: {
        port: 3000,
        publicDir: {
            name: 'public',
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
});
