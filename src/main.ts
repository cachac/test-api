import config from './config'
import { GET, POST } from './router'
import { send } from '@/util/response'
// import db from '@/database/index.js'

// await db.setConnection().then(() => {
Bun.serve({
  development: config.NODE_ENV === 'dev',
  port: config.NODE_PORT,
  async fetch(req, server) {
    if (req.method === 'OPTIONS') return new Response('Departed', { headers: config.CORS_HEADERS }) // send('Departed')

    const url = new URL(req.url)
    const method = req.method.toUpperCase() === 'GET' ? GET : POST

    const routeHandler = method[url.pathname] || (() => send({ ok: false, userError: 'Ruta no encontrada' }, { status: 404 }))

    return routeHandler(req)
  },
  error(error) {
    console.error('💥 ERRRRRRRRRRRRRRRRRRRRRRRRRR handler', error)

    return send(
      {
        ok: false,
        error: `Bun http server error: ${error.stack}\n`,
        userError: 'Error interno en el servidor'
      },
      {
        status: 500
      }
    )
  }
})
// })

process.on('uncaughtException', err => {
  console.error('AHHHHHHHHHHHHHHHHHHHHHHHHHH! :', err)
  process.exit(1)
})

process.on('unhandledRejection', err => {
  console.error('ERRRRRRRRRRRRRRRRRRRRRRRRRR! :', err)
  process.exit(1)
})

console.log(`[${config.NODE_ENV}] ${config.APP_NAME} v${config.APP_VERSION} listening to port ${config.NODE_PORT} | Bun REST 🚀`)
