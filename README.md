# IEEE CASS BMSIT&M — Frontend

Professional website for the IEEE Circuits and Systems Society chapter at BMS Institute of Technology & Management, Bengaluru.

## Tech Stack

- **React 18** + **Vite** — fast dev experience
- **React Router v6** — client-side routing
- **Tailwind CSS** — utility-first styling
- **Axios** — API calls
- **Lucide React** — icons

## Design System

- **Colors:** `#006c42` (primary green), `#000000` (background), `#FFFFFF` (text)
- **Fonts:** Bebas Neue (display), Barlow Condensed (headings), Outfit (body), JetBrains Mono (code/labels)
- **Theme:** Dark industrial with circuit/grid motifs and green glow accents

## Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Configure backend URL
```bash
cp .env.example .env
# Edit .env and set VITE_API_URL to your backend
```

### 3. Add your logo
Place your `logo.png` in the `public/` folder.

### 4. Run dev server
```bash
npm run dev
# Opens at http://localhost:3000
```

### 5. Build for production
```bash
npm run build
```

## Pages & Routes

| Route | Page | Data Source |
|-------|------|-------------|
| `/` | Home | Static |
| `/events` | Events | GET `/api/events` |
| `/projects` | Projects | GET `/api/projects` |
| `/about` | About & Team | GET `/api/team` |
| `/membership` | Membership | Static |

## API Endpoints Expected

Your backend should expose:
- `GET /api/events` → list of events
- `GET /api/projects` → list of projects  
- `GET /api/team` → list of team members

See `src/api/index.js` to change the base URL.

## File Structure

```
src/
├── api/
│   └── index.js          ← axios API calls
├── components/
│   ├── Navbar.jsx         ← sticky nav with mobile menu
│   └── Footer.jsx         ← footer with links
├── hooks/
│   └── useReveal.js       ← scroll reveal animation hook
├── pages/
│   ├── Home.jsx           ← hero, stats, overview, CTAs
│   ├── Events.jsx         ← event cards + gallery modal
│   ├── Projects.jsx       ← project cards with links
│   ├── AboutTeam.jsx      ← about text + team grid
│   └── Membership.jsx     ← vision/mission/goals/benefits
├── App.jsx                ← router + cursor
├── main.jsx               ← entry point
└── index.css              ← global styles + design tokens
```

## Customization

- **Logo:** Replace `public/logo.png`
- **Backend URL:** Set `VITE_API_URL` in `.env`
- **Contact info:** Update `src/components/Footer.jsx`
- **IEEE membership links:** Update URLs in `src/pages/Membership.jsx`
- **Social links:** Update Instagram/LinkedIn URLs in `Footer.jsx`
