import info from '../../package.json'

const config = Bun.env

console.log('config.NODE_ENV', config.NODE_ENV)
console.log('config.NODE_PORT', config.NODE_PORT)

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'OPTIONS, POST, GET, PUT, DELETE',
  'Access-Control-Allow-Headers': 'Content-Type,Authorization'
  // 'authorization': 'Bearer '
}

export default {
  NODE_ENV: config.NODE_ENV,
  NODE_PORT: config.NODE_PORT,

  APP_NAME: info.name,
  APP_VERSION: info.version,

  CORS_HEADERS
}
