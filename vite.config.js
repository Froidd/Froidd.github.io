import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: 'https://froidd.github.io/', // 👈 para repos tipo usuario.github.io
})
