import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base points at the repo name so assets resolve on the GitHub Pages
// project site (https://sudiptab2100.github.io/my-profile/). Dev stays at root.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/my-profile/' : '/',
  plugins: [react()],
}))
