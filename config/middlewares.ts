function corsOrigins(env: (key: string, defaultValue?: string) => string): string[] {
  const keys = [
    'APP_URL',
    'DEV_APP_URL',
    'API_URL',
    'DEV_API_URL',
    'zeropsSubdomain',
    'STRAPI_URL',
  ] as const;

  const origins = new Set<string>();

  for (const key of keys) {
    const value = env(key, '').trim();
    if (value.startsWith('http') && !value.includes('${')) {
      origins.add(value.replace(/\/$/, ''));
    }
  }

  origins.add('http://localhost:5173');
  origins.add('http://localhost:4173');

  return [...origins];
}

export default ({ env }) => [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      // Strapi expects string | string[] — a function breaks admin asset requests (500).
      origin: corsOrigins(env),
      credentials: true,
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
