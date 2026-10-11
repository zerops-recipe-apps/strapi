function resolvePublicUrl(env: (key: string, defaultValue?: string) => string): string | undefined {
  for (const key of ['API_URL', 'STRAPI_URL', 'DEV_API_URL', 'zeropsSubdomain'] as const) {
    const value = env(key, '').trim()
    if (value.startsWith('http') && !value.includes('${')) {
      return value.replace(/\/$/, '')
    }
  }
  return undefined
}

export default ({ env }) => {
  const url = resolvePublicUrl(env)

  return {
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    ...(url ? { url } : {}),
    app: {
      keys: env.array('APP_KEYS'),
    },
  }
}
