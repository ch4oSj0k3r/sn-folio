# snPage — Personal Developer Homepage

Persönliche Homepage als Web-Entwickler, gebaut mit Next.js, TypeScript und Tailwind CSS. Die Seite ist als Single-Page-Application aufgebaut und besteht aus den Sektionen Hero, About, Skills, Projects und Experience.

## Stack

| Bereich | Technologie |
|---|---|
| Framework | Next.js 16 (App Router, Standalone Output) |
| Sprache | TypeScript 5 |
| UI | React 19 |
| Styling | Tailwind CSS v4 |
| Fonts | Geist Sans & Geist Mono |
| Linting | ESLint v9 (Flat Config) |
| Containerisierung | Docker (Multi-Stage, ARM64) |

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

| Script | Beschreibung |
|---|---|
| `npm run dev` | Entwicklungsserver mit Hot Reload |
| `npm run build` | Produktions-Build (Standalone) |
| `npm start` | Produktionsserver starten |
| `npm run lint` | ESLint ausführen |

## Deployment (Raspberry Pi / ARM64)

```bash
# Image für ARM64 bauen
docker buildx build --platform linux/arm64 -t snpage:latest --load .

# Image exportieren und übertragen
docker save snpage:latest | gzip > snpage.tar.gz
scp snpage.tar.gz pi@<PI_IP>:/home/pi/snpage/

# Auf dem Pi laden und starten
ssh pi@<PI_IP> "docker load < /home/pi/snpage/snpage.tar.gz"
ssh pi@<PI_IP> "cd /home/pi/snpage && docker compose -f docker-compose.prod.yml up -d"
```

Der Produktions-Container läuft auf Port `3000` und als non-root User (`nextjs`, UID 1001).

## Umgebungsvariablen

Lokale Overrides in `.env.local` (wird nicht ins Repository committed).

| Variable | Beschreibung | Standard |
|---|---|---|
| `NODE_ENV` | Laufzeitumgebung | `production` |
| `PORT` | Container-Port | `3000` |
| `NEXT_TELEMETRY_DISABLED` | Next.js Telemetrie deaktivieren | `1` |

## Projektstruktur

```
snPage/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root Layout, Fonts, Metadaten
│   │   ├── page.tsx            # Single Page — alle Sektionen
│   │   └── globals.css         # Tailwind Direktiven
│   └── components/
│       └── sections/
│           ├── Hero.tsx         # Fullscreen Intro mit CTA
│           ├── About.tsx        # Biografie
│           ├── Skills.tsx       # Skills-Grid (Frontend/Backend/Tools)
│           ├── Projects.tsx     # Projekt-Karten
│           └── Experience.tsx   # Karriere-Timeline
├── public/
│   └── images/
│       └── hero.webp
├── Dockerfile
├── docker-compose.yml           # Lokale Entwicklung (Port 3005)
├── docker-compose.prod.yml      # Produktion / ARM64 (Port 3000)
└── next.config.ts               # output: "standalone"
```

## Hinweise

- Pfad-Alias `@/` zeigt auf `src/` (konfiguriert in `tsconfig.json`).
- Nur Dark Theme — kein Light/Dark-Toggle.
- Alle Inhalte (Name, Projekte, Erfahrungen) sind hardcodiert in den jeweiligen Komponenten.
- Kein Test-Framework installiert.
