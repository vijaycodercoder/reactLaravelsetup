import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react'
export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            react,
            refresh: true,
        }),
    ],
    css: {
        postcss: {
            // Point to your postcss.config.js
            config: require.resolve('./postcss.config.js')
        }
    },
});
