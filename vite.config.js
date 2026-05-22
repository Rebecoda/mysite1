import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const cherrywinkIndexRoute = () => ({
  name: 'cherrywink-index-route',
  configureServer(server) {
    server.middlewares.use((req, _res, next) => {
      const [pathname, query = ''] = (req.url || '').split('?')

      if (pathname === '/cherrywink' || pathname === '/cherrywink/') {
        req.url = `/cherrywink/index.html${query ? `?${query}` : ''}`
      }

      next()
    })
  },
})

export default defineConfig({
  plugins: [cherrywinkIndexRoute(), react(), tailwindcss()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    allowedHosts: ['dev.rebeccapan.space'],
    // 限制文件监控范围，只盯着 src 看
    watch: {
      ignored: ['**/design-system/**', '**/node_modules/**']
    }
  }
})
