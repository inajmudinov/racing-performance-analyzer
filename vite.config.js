import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/racing-performance-analyzer/',  // name of your repo
  plugins: [react()],
})