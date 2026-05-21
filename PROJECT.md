# sn-folio — Personal Developer Homepage

Eine persönliche Homepage als Web-Entwickler.

## Tech Stack

| Bereich    | Technologie             |
| ---------- | ----------------------- |
| Framework  | Next.js 16 (App Router) |
| Sprache    | TypeScript 5            |
| UI         | React 19                |
| Styling    | Tailwind CSS v4         |
| Laufzeit   | Node.js 20 LTS          |
| Deployment | Netlify                 |

## Seitenstruktur

- **Hero / Intro** — Begrüßung, Name, Tagline, CTA
- **Über mich** — Kurze Biografie und Persönlichkeit
- **Skills / Technologien** — Tech-Stack und Kenntnisse
- **Projekte / Portfolio** — Showcase eigener Arbeiten
- **Erfahrung / CV** — Beruflicher Werdegang
- **Impressum / Datenschutz** — Rechtliche Seiten

## Projektstruktur

```
sn-folio/
├── src/
│   ├── app/
│   │   ├── impressum/
│   │   │   └── page.tsx          # Impressum-Seite
│   │   ├── datenschutz/
│   │   │   └── page.tsx          # Datenschutzerklärung
│   │   ├── layout.tsx            # Root Layout
│   │   ├── page.tsx              # Startseite (alle Sektionen)
│   │   └── globals.css           # Globale Styles
│   └── components/
│       └── sections/
│           ├── Hero.tsx
│           ├── About.tsx
│           ├── Skills.tsx
│           ├── Projects.tsx
│           ├── Experience.tsx
│           └── Footer.tsx
├── public/                       # Statische Assets (Bilder, Icons)
├── docker-compose.yml            # Lokale Entwicklung
├── netlify.toml                  # Netlify Build-Konfiguration
└── next.config.ts
```

## Lokale Entwicklung

### Starten

```bash
docker compose up
```

Die App ist unter [http://localhost:3005](http://localhost:3005) erreichbar.
Hot Reload ist via Volume-Mount aktiv — Änderungen am Code werden sofort übernommen.

### Stoppen

```bash
docker compose down
```

### Ohne Docker

```bash
npm install
npm run dev   # http://localhost:3000
```

## Deployment auf Netlify

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

Lokale Overrides in `.env.local` (nicht ins Repository einchecken).
Produktions-Variablen in Netlify unter **Site settings → Environment variables** setzen.

## Entwicklungs-Workflow

```bash
# 1. Repository klonen
git clone <repo-url> sn-folio && cd sn-folio

# 2. Dev-Container starten
docker compose up

# 3. Änderungen vornehmen — Hot Reload ist aktiv

# 4. Vor dem Merge: Build lokal prüfen
npm run build
```
