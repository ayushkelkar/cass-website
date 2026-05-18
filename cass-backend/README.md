# cass-website

Backend for the CASS Website

## Stack

- Node.js + Express
- MongoDB Atlas + Mongoose
- dotenv, cors

## Setup

1. Clone the repo and install dependencies:

```bash
npm install
```

2. Create a `.env` file in the project root:

```
PORT=3000
MONGO_URI=Enter the mongodb database URL here
```

3. Run the server:

```bash
node index.js
```

## API Endpoints

Replace the base URL with the deployed URL if you choose to do so
Base URL: `https://localhost:3000/`

All endpoints are GET only. Responses are JSON.

---

### Events

**GET** `/api/events`

Returns all events. Optionally filter by status.

Query params:
- `?status=upcoming` — returns upcoming events only
- `?status=past` — returns past events only

Response:
```json
[
  {
    "_id": "string",
    "title": "string",
    "date": "string",
    "location": "string",
    "description": "string",
    "image": "string (url)",
    "attendees": "number",
    "topics": ["string"],
    "status": "upcoming | past",
    "registrationLink": "string (url, null if past)",
    "images": ["string (url)"]
  }
]
```

---

### Projects

**GET** `/api/projects`

Returns all projects. Optionally filter by status.

Query params:
- `?status=ongoing` — returns ongoing projects only
- `?status=finished` — returns finished projects only

Response:
```json
[
  {
    "_id": "string",
    "title": "string",
    "description": "string",
    "status": "ongoing | finished",
    "thumbnail": "string (url)",
    "tags": ["string"],
    "links": {
      "github": "string (url)",
      "demo": "string (url)"
    }
  }
]
```

---

### Team

**GET** `/api/team`

Returns all team members.

Response:
```json
[
  {
    "_id": "string",
    "name": "string",
    "role": "string",
    "image": "string (url)",
    "links": {
      "linkedin": "string (url)",
      "email": "string",
      "website": "string (url)"
    }
  }
]
```

---

## Notes

- No POST endpoints exist yet. Admin module is also still a TO-DO.
- Membership part is not yet started.
- Optional fields such as registrationLink and images may be null or absent.
- All image fields are URLs.