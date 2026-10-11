# Strapi on Zerops

<!-- #ZEROPS_EXTRACT_START:intro# -->
Strapi v5.12 headless CMS on [Zerops](https://zerops.io). PostgreSQL ships with the recipe. **Site Info** and sample blog posts seed on bootstrap; any frontend (e.g. [strapi-react-frontend](https://github.com/zerops-recipe-apps/strapi-react-frontend)) reads `/api/site-info` and `/api/blog-posts`.
<!-- #ZEROPS_EXTRACT_END:intro# -->

## Repos

| Repo | Role |
| --- | --- |
| [strapi](https://github.com/zerops-recipe-apps/strapi) | Strapi API + admin (`/admin`) — this repo |
| [strapi-react-frontend](https://github.com/zerops-recipe-apps/strapi-react-frontend) | Optional Vite + React SPA |

Recipes: [`zeropsio/recipes/strapi`](https://github.com/zeropsio/recipes/tree/main/strapi) (CMS only) and [`strapi-react`](https://github.com/zeropsio/recipes/tree/main/strapi-react) (CMS + React).

## Local

```bash
yarn develop   # :1337, admin /admin
```

Point a frontend `VITE_API_URL` at your Strapi URL.

<!-- #ZEROPS_EXTRACT_START:faq# -->
## FAQ

**React demo** — deploy the [strapi-react](https://app.zerops.io/recipes/strapi-react) recipe or run the frontend repo against this API.

**Setups** — only `dev` and `prod`. Hostname `strapistage` uses `zeropsSetup: prod`.

**Node** — Zerops Strapi services use `nodejs@24`; local dev should match `package.json` engines.

**Content** — edit **Site Info** in Strapi admin; bootstrap enables public read on `/api/site-info`.
<!-- #ZEROPS_EXTRACT_END:faq# -->

<!-- #ZEROPS_EXTRACT_START:integration-guide# -->
## Integration

- Strapi `prod`: Yarn 4 from `.yarn/releases/`; deploy `config/`, `src/`, `dist/`, `public/`, `node_modules`.
- Strapi `dev`: `deployFiles: ./`, `yarn develop` over SSH.
<!-- #ZEROPS_EXTRACT_END:integration-guide# -->
