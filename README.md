# Camera

A small beginner course on taking better photos with a DSLR or mirrorless camera.

Stack: **Next.js** + **Docker**. Runs self-contained — no external database.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Docker (self-contained)

```bash
docker compose up -d --build
```

App listens on host port **3010** → [http://localhost:3010](http://localhost:3010).

Stop:

```bash
docker compose down
```

## Deploy on docker-01 (`192.168.1.149`)

Example:

```bash
# from this machine
rsync -av --exclude node_modules --exclude .next ./ adrian@192.168.1.149:~/camera/
ssh adrian@192.168.1.149 "cd ~/camera && docker compose up -d --build"
```

Then open `http://192.168.1.149:3010`.

## Content

Lessons live in `src/content/lessons.ts`. Add or edit entries there — pages pick them up automatically.
