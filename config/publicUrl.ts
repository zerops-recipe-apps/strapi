/** Ignore vault placeholders and non-absolute URLs for Strapi server.url (admin build reads this). */
export function resolvePublicUrl(
  env: (key: string, defaultValue?: string) => string,
): string | undefined {
  for (const key of ['zeropsSubdomain', 'API_URL', 'STRAPI_URL', 'DEV_API_URL'] as const) {
    const value = env(key, '').trim()
    if (value.startsWith('http') && !value.includes('${')) {
      return value.replace(/\/$/, '')
    }
  }
  return undefined
}
