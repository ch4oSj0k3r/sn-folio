# sn-folio — Personal Developer Homepage

Persönliche Homepage als Web-Entwickler, gebaut mit Next.js, TypeScript und Tailwind CSS. Die Seite ist als Single-Page-Application aufgebaut und besteht aus den Sektionen Hero, About, Skills, Projects, References und Experience.

## Stack

| Bereich     | Technologie             |
| ----------- | ----------------------- |
| Framework   | Next.js 16 (App Router) |
| Sprache     | TypeScript 5            |
| UI          | React 19                |
| Styling     | Tailwind CSS v4         |
| Animationen | Framer Motion           |
| Fonts       | Geist Sans & Geist Mono |
| Linting     | ESLint v9 (Flat Config) |
| Formatting  | Prettier                |
| Deployment  | Netlify                 |

## Seitenstruktur

| Sektion    | Beschreibung                                            |
| ---------- | ------------------------------------------------------- |
| Hero       | Fullscreen-Intro mit Typing-Effekt und Scroll-Pfeil     |
| About      | Kurze Biografie, Zertifikate-Badges                     |
| Skills     | Tech-Stack im 2×3-Grid                                  |
| Projects   | Eigene Projekte mit GitHub-Links, WIP-Badge             |
| Experience | Karriere-Timeline                                       |
| References | Berufliche Referenzprojekte, gruppiert nach Arbeitgeber |
| Footer     | LinkedIn, Xing, Impressum, Datenschutz                  |

## Projektstruktur

```
sn-folio/
├── src/
│   ├── app/
│   │   ├── impressum/
│   │   │   └── page.tsx            # Impressum-Seite
│   │   ├── datenschutz/
│   │   │   └── page.tsx            # Datenschutzerklärung
│   │   ├── layout.tsx              # Root Layout, Fonts, Metadaten, metadataBase
│   │   ├── page.tsx                # Single Page — alle Sektionen
│   │   ├── globals.css             # Tailwind, Animations (gradient-shift, blink)
│   │   └── opengraph-image.tsx     # Dynamisch generiertes OG-Image (1200×630)
│   └── components/
│       ├── FadeIn.tsx              # Framer Motion Scroll-Fade-Wrapper
│       └── sections/
│           ├── Hero.tsx            # Fullscreen Intro, Typing-Effekt, Scroll-Pfeil
│           ├── About.tsx           # Biografie, Badges
│           ├── Skills.tsx          # Skills-Grid
│           ├── Projects.tsx        # Projekt-Karten (inkl. WIP-Karte)
│           ├── Experience.tsx      # Karriere-Timeline
│           ├── References.tsx      # Referenzprojekte nach Arbeitgeber
│           └── Footer.tsx          # Footer mit Links und id="footer"
├── public/
│   └── images/
│       └── hero.webp
├── docker-compose.yml               # Lokale Entwicklung (Port 3005)
├── netlify.toml                     # Netlify Build-Konfiguration
└── next.config.ts
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

Nach jedem Merge auf `main` deployed Netlify automatisch.
Deploy Previews werden automatisch für jeden Pull Request erstellt.

### Umgebungsvariablen

Lokale Overrides in `.env.local` (wird nicht ins Repository committed).
Produktions-Variablen werden in Netlify unter **Site settings → Environment variables** gesetzt.

## Hinweise

- Pfad-Alias `@/` zeigt auf `src/` (konfiguriert in `tsconfig.json`).
- Nur Dark Theme — kein Light/Dark-Toggle.
- Alle Inhalte (Name, Projekte, Erfahrungen) sind hardcodiert in den jeweiligen Komponenten.
- Prettier läuft automatisch via Husky vor jedem Commit (`lint-staged`).
- OG-Image wird zur Build-Zeit statisch generiert (`opengraph-image.tsx`).
