import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/send/', // 👈 GitHubのリポジトリ名に合わせて書く！
  plugins: [react()],
})
