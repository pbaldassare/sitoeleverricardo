# sitoeleverricardo

Workspace **ricardoelever** (`ricardoelever.code-workspace` in root di questo repo).

| Cartella | Repository / deploy |
|----------|-------------------|
| `cbnet/` | [pbaldassare/cbnet](https://github.com/pbaldassare/cbnet) |
| `studioilever/` | Sito Studio ILEVER (Vite); build da root del repo |

Questo repo contiene metadati del workspace; il codice CBnet resta nel repo `cbnet`.

### Cloudflare Pages

Deploy **`main`**, commit **`3f3c1e9` o successivi** (prima mancava `package.json` in root).

| Campo | Valore |
|-------|--------|
| Production branch | `main` (non un commit fisso) |
| Build command | `npm run build` |
| Build output | `studioilever/dist` (anche in `wrangler.toml`) |
| Root directory | *(vuoto = root del repo)* |
| Node | 20 (`.nvmrc`) |

Dopo un push, in **Deployments** deve comparire l’hash nuovo (es. `3f3c1e9…`). Se vedi ancora `3dbe70b`, **Retry** non basta: abilita deploy automatico su `main` o lancia **Create deployment** su HEAD.
