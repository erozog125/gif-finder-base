import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// 📌 PASO 18 — Aquí agregaremos el plugin VitePWA para convertir la app en PWA.

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
