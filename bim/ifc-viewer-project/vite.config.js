import { defineConfig } from 'vite';

export default defineConfig({
  root: './', // Set the root directory to serve files correctly
  server: {
    open: true, // Automatically open the browser
    mimeTypes: {
      'application/wasm': ['.wasm'], // Ensure .wasm files are served with the correct MIME type
    },
  },
});
