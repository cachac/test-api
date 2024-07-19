import config from '../config'

type ResponseInit = {
  status?: number
  headers?: Record<string, string>
}

type Body = {
  ok?: boolean
  result?: object | string | []
  error?: string | any
  userError?: string
}

export const send = (body: Body, init: ResponseInit = {}): Response => {
  init.headers = { ...init.headers, ...config.CORS_HEADERS }

  if (body.error) {
    console.error('Error: ', body.error)
  }

  if (!init.status) init.status = 200
  if (typeof body === 'object') {
    if (body.ok === undefined) body.ok = true

    return new Response(JSON.stringify(body), init)
  }

  return new Response(body, init)
}
