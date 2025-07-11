
# GitHub User Repositories Frontend

>This is a modular React (Next.js) frontend for the CSG Engineer Interview Project. It allows users to enter a GitHub username, fetches and displays the user's repositories, and shows whether the user was created or updated in the backend storage.

## Features

- Clean, component-based architecture (`components/` directory)
- Form to input GitHub username
- Fetches and displays repository data (name, url, description, language)
- Shows status messages for user creation/update/errors
- Uses a backend Python/Flask service for all data operations

## ⚠️ Important: Backend Required

This frontend **requires the backend service** (Python/Flask, port 5000 by default) to be running for full functionality. See the main project or backend README for setup instructions.

The backend URL is configured via `.env.local`:

```
NEXT_PUBLIC_BACKEND_URL=http://localhost:5000
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

2. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `components/` — UI components (`UsernameForm`, `RepoList`, `StatusMessage`)
- `lib/api.ts` — API utility for backend requests
- `app/page.tsx` — Main page, composes components and manages state

## Customization

- You can further style or extend the UI as needed.
- To change the backend URL, edit `.env.local`.

---

For more details, see the main project instructions or contact the project maintainer.
