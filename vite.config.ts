import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
import path from 'path'

// https://vitejs.dev/config/

dotenv.config();

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3000
  },
  define: {
    'process.env': process.env
  },
  resolve: {
    alias: [{find: "@", replacement: path.resolve(__dirname, 'src')}]
  }
})
