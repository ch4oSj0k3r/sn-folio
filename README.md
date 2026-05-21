# sn-folio — Personal Developer Homepage

Persönliche Homepage als Web-Entwickler, gebaut mit Next.js, TypeScript und Tailwind CSS. Die Seite ist als Single-Page-Application aufgebaut und besteht aus den Sektionen Hero, About, Skills, Projects und Experience.

## Stack

| Bereich    | Technologie             |
| ---------- | ----------------------- |
| Framework  | Next.js 16 (App Router) |
| Sprache    | TypeScript 5            |
| UI         | React 19                |
| Styling    | Tailwind CSS v4         |
| Fonts      | Geist Sans & Geist Mono |
| Linting    | ESLint v9 (Flat Config) |
| Formatting | Prettier                |
| Deployment | Netlify                 |

## Branching-Strategie

| Branch      | Zweck                                              |
| ----------- | -------------------------------------------------- |
| `main`      | Protected — Netlify deployed automatisch bei Merge |
| `feature/*` | Feature-Branches, Basis: `main`, via PR in `main`  |

### Workflow

```bash
# 1. Feature-Branch erstellen
git checkout -b feature/mein-feature

# 2. Entwickeln & committen
git add .
git commit -m "feat: ..."

# 3. Branch pushen
git push -u origin feature/mein-feature

# 4. Pull Request auf GitHub: feature/* → main
# 5. Nach Merge deployed Netlify automatisch
```

## Lokale Entwicklung

### Mit Docker (empfohlen)

```bash
docker compose up
```

Die App ist unter [http://localhost:3005](http://localhost:3005) erreichbar.
Hot Reload ist via Volume-Mount aktiv.

```bash
docker compose down
```

### Ohne Docker

```bash
npm install
npm run dev   # http://localhost:3000
```

## Verfügbare Scripts

| Script           | Beschreibung                      |
| ---------------- | --------------------------------- |
| `npm run dev`    | Entwicklungsserver mit Hot Reload |
| `npm run build`  | Produktions-Build                 |
| `npm start`      | Produktionsserver starten         |
| `npm run lint`   | ESLint ausführen                  |
| `npm run format` | Prettier auf gesamtes Projekt     |

## Deployment (Netlify)

### Initiales Setup (einmalig)

1. Unter [app.netlify.com](https://app.netlify.com) einloggen oder registrieren
2. **"Add new site"** → **"Import an existing project"** → **GitHub** auswählen
3. Repository `sn-folio` auswählen und Zugriff gewähren
4. Build-Einstellungen werden automatisch aus `netlify.toml` übernommen:
    - Build command: `npm run build`
    - Publish directory: `.next`
5. **"Deploy site"** klicken

### Automatisches Deployment

Nach dem initialen Setup deployed Netlify automatisch bei jedem Push auf `main`.

### Umgebungsvariablen

Lokale Overrides in `.env.local` (wird nicht ins Repository committed).
Produktions-Variablen werden in Netlify unter **Site settings → Environment variables** gesetzt.

| Variable                  | Beschreibung                    |
| ------------------------- | ------------------------------- |
| `NEXT_TELEMETRY_DISABLED` | Next.js Telemetrie deaktivieren |

## Projektstruktur

```
sn-folio/
├── src/
│   ├── app/
│   │   ├── impressum/
│   │   │   └── page.tsx            # Impressum-Seite
│   │   ├── datenschutz/
│   │   │   └── page.tsx            # Datenschutzerklärung
│   │   ├── layout.tsx              # Root Layout, Fonts, Metadaten
│   │   ├── page.tsx                # Single Page — alle Sektionen
│   │   └── globals.css             # Tailwind Direktiven
│   └── components/
│       └── sections/
│           ├── Hero.tsx             # Fullscreen Intro mit CTA
│           ├── About.tsx            # Biografie
│           ├── Skills.tsx           # Skills-Grid
│           ├── Projects.tsx         # Projekt-Karten
│           ├── Experience.tsx       # Karriere-Timeline
│           └── Footer.tsx           # Footer mit Links
├── public/
│   └── images/
│       └── hero.webp
├── docker-compose.yml               # Lokale Entwicklung (Port 3005)
├── netlify.toml                     # Netlify Build-Konfiguration
└── next.config.ts
```

## Hinweise

- Pfad-Alias `@/` zeigt auf `src/` (konfiguriert in `tsconfig.json`).
- Nur Dark Theme — kein Light/Dark-Toggle.
- Alle Inhalte (Name, Projekte, Erfahrungen) sind hardcodiert in den jeweiligen Komponenten.
- Prettier läuft automatisch via Husky vor jedem Commit (`lint-staged`).
