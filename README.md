# sitoeleverricardo

Workspace **ricardoelever** (`ricardoelever.code-workspace` in root di questo repo).

| Cartella | Repository / deploy |
|----------|-------------------|
| `cbnet/` | [pbaldassare/cbnet](https://github.com/pbaldassare/cbnet) |
| `studioilever/` | Sito Studio ILEVER (Vite); build da root del repo |

Questo repo contiene metadati del workspace; il codice CBnet resta nel repo `cbnet`.

### Cloudflare Pages

| Campo | Valore |
|-------|--------|
| Build command | `npm run build` |
| Build output | `studioilever/dist` (anche in `wrangler.toml`) |
| Root directory | `/` (repo root) |
| Node | ≥ 20 |
