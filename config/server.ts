import { resolvePublicUrl } from './publicUrl'

export default ({ env }) => {
  const url = resolvePublicUrl(env)

  return {
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    ...(url ? { url } : {}),
    proxy: env.bool('IS_PROXIED', true) ? { koa: true } : undefined,
    app: {
      keys: env.array('APP_KEYS'),
    },
  }
}
