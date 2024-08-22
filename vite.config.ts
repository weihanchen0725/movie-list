import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://weihanchen0725.github.io/movie-list/",
  build: {
    outDir: "dist",
  },
})
