# sn-folio

Persönliche Portfolio-Website von Sven Nowitzky, gebaut mit Next.js 16, TypeScript und Tailwind CSS. Deployed auf Netlify.

## Lokale Entwicklung

### Mit Docker (empfohlen)

```bash
docker compose up
```

Erreichbar unter [http://localhost:3005](http://localhost:3005). Hot Reload ist aktiv.

```bash
docker compose down
```

### Ohne Docker

```bash
npm install
npm run dev   # http://localhost:3000
```

## Scripts

| Script           | Beschreibung                      |
| ---------------- | --------------------------------- |
| `npm run dev`    | Entwicklungsserver mit Hot Reload |
| `npm run build`  | Produktions-Build                 |
| `npm start`      | Produktionsserver starten         |
| `npm run lint`   | ESLint ausführen                  |
| `npm run format` | Prettier auf gesamtes Projekt     |

## Branching-Strategie

| Branch      | Zweck                                              |
| ----------- | -------------------------------------------------- |
| `main`      | Protected — Netlify deployed automatisch bei Merge |
| `feature/*` | Feature-Branches, Basis: `main`, via PR in `main`  |

```bash
git checkout -b feature/name
git commit -m "feat: ..."
git push -u origin feature/name
# → Pull Request auf GitHub: feature/* → main
```

## Deployment

Netlify deployed automatisch bei jedem Merge auf `main`. Deploy Previews werden für jeden PR erstellt.

Weitere Details siehe [PROJECT.md](./PROJECT.md).
