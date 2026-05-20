# snPage — Personal Developer Homepage

Persönliche Homepage als Web-Entwickler, gebaut mit Next.js, TypeScript und Tailwind CSS.

## Stack

- **Framework:** Next.js 16 (App Router)
- **Sprache:** TypeScript
- **Styling:** Tailwind CSS
- **Containerisierung:** Docker (Multi-Stage, ARM64)

## Lokale Entwicklung

```bash
docker compose up
```

Die App ist unter [http://localhost:3005](http://localhost:3005) erreichbar.  
Hot Reload ist via Volume-Mount aktiv.

```bash
docker compose down
```

## Deployment (Raspberry Pi)

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

## Projektstruktur

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
└── components/
    └── sections/
        ├── Hero.tsx
        ├── About.tsx
        ├── Skills.tsx
        ├── Projects.tsx
        └── Experience.tsx
```
