# sn-folio — Personal Developer Homepage

Eine persönliche Homepage als Web-Entwickler.

## Tech Stack

| Bereich       | Technologie                        |
|---------------|------------------------------------|
| Framework     | Next.js 14+ (App Router)           |
| Sprache       | TypeScript                         |
| Styling       | Tailwind CSS                       |
| Laufzeit      | Node.js 20 LTS                     |
| Containerisierung | Docker (Multi-Stage, ARM64)    |

## Seitenstruktur

- **Hero / Intro** — Begrüßung, Name, Tagline, CTA
- **Über mich** — Kurze Biografie und Persönlichkeit
- **Skills / Technologien** — Tech-Stack und Kenntnisse
- **Projekte / Portfolio** — Showcase eigener Arbeiten
- **Erfahrung / CV** — Beruflicher Werdegang

## Projektstruktur

```
sn-folio/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root Layout
│   │   ├── page.tsx          # Startseite (alle Sektionen)
│   │   └── globals.css       # Globale Styles
│   └── components/
│       ├── sections/
│       │   ├── Hero.tsx
│       │   ├── About.tsx
│       │   ├── Skills.tsx
│       │   ├── Projects.tsx
│       │   └── Experience.tsx
│       └── ui/               # Wiederverwendbare UI-Komponenten
├── public/                   # Statische Assets (Bilder, Icons)
├── Dockerfile                # Multi-Stage Production Build
├── docker-compose.yml        # Lokale Entwicklung
├── docker-compose.prod.yml   # Produktion
└── PROJECT.md
```

## Docker — Lokale Entwicklung

### Starten

```bash
docker compose up
```

Die App ist unter [http://localhost:3000](http://localhost:3000) erreichbar.  
Hot Reload ist via Volume-Mount aktiv — Änderungen am Code werden sofort übernommen.

### Stoppen

```bash
docker compose down
```

## Docker — Deployment auf Raspberry Pi

### 1. Image für ARM64 bauen

```bash
docker buildx build --platform linux/arm64 -t sn-folio:latest --load .
```

> Voraussetzung: `docker buildx` ist eingerichtet und ein ARM64-Builder ist aktiv.  
> Alternativ direkt auf dem Pi bauen (ohne `--platform`-Flag).

### 2. Image exportieren und übertragen

```bash
# Image als Tarball speichern
docker save sn-folio:latest | gzip > sn-folio.tar.gz

# Auf den Raspberry Pi übertragen
scp sn-folio.tar.gz pi@<PI_IP>:/home/pi/sn-folio/

# Auf dem Pi: Image laden
ssh pi@<PI_IP> "docker load < /home/pi/sn-folio/sn-folio.tar.gz"
```

### 3. Container auf dem Pi starten

```bash
ssh pi@<PI_IP> "cd /home/pi/sn-folio && docker compose -f docker-compose.prod.yml up -d"
```

## Umgebungsvariablen

| Variable       | Beschreibung                  | Standard     |
|----------------|-------------------------------|--------------|
| `NODE_ENV`     | Laufzeitumgebung              | `production` |
| `PORT`         | Interner Container-Port       | `3000`       |

Lokale Overrides in `.env.local` (nicht ins Repository einchecken).

## Entwicklungs-Workflow

```bash
# 1. Repository klonen
git clone <repo-url> sn-folio && cd sn-folio

# 2. Dev-Container starten
docker compose up

# 3. Änderungen vornehmen — Hot Reload ist aktiv

# 4. Vor dem Deployment: Production-Build lokal testen
docker compose -f docker-compose.prod.yml up --build
```
