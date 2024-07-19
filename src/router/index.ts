import config from '../config'
// import user from '@/api/admin/user'
// import { auth } from '../util/auth'
import { send } from '@/util/response.ts'

export const GET = {
  '/': () => new Response(JSON.stringify({ app: config.APP_NAME, env: config.NODE_ENV, version: config.APP_VERSION }))
}

export const POST = {
  // USER ENDPOINTS
  '/': req => {
    console.log('request')

    return send({ ok: true })
  }
}
