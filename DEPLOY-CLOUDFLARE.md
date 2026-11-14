# Deploy Cloudflare Pages — leggere prima

## Il log mostra `HEAD is now at 3dbe70b`?

Stai facendo **Retry** su un deploy **vecchio e fallito**. Il Retry ribuilda **sempre lo stesso commit**, senza `package.json` in root.

**Non usare Retry** su quel deploy.

### Cosa fare

1. **Workers & Pages** → il progetto → **Deployments**
2. **Create deployment** (o attendi auto-deploy da Git)
3. Scegli branch **`main`** e l’ultimo commit (`231715b` o più recente)
4. Nel log deve comparire almeno `3f3c1e9` o `231715b`, non `3dbe70b`

### Impostazioni build (Settings → Builds)

**Opzione A — root del repository (consigliata con `main` attuale)**

| Campo | Valore |
|-------|--------|
| Production branch | `main` |
| Root directory | *(vuoto)* |
| Build command | `npm run build` |
| Build output | `studioilever/dist` |

**Opzione B — solo cartella sito** (funziona anche senza `package.json` in root)

| Campo | Valore |
|-------|--------|
| Production branch | `main` |
| Root directory | `studioilever` |
| Build command | `npm ci && npm run build` |
| Build output | `dist` |

Con opzione B il log dovrebbe dire: `Found wrangler.toml file` e `pages_build_output_dir: dist`.

### Node

Versione **20** (file `.nvmrc` in root).