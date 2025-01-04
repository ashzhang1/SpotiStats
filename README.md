# SpotiStats

## Project Overview

SpotiStats is a web application that provides users with insights into their Spotify listening habits. By leveraging the Spotify Web API, SpotiStats visualises users' top artists and tracks with engaging charts and tables.
\
**Live Web Link:** https://my-spoti-stats.netlify.app/

## Warning

Currently, Spotify's developer restrictions limit this app to 25 users. I have submitted a request to increase this limit and are awaiting approval. If you're unable to log in, please check back later once the restriction has been lifted. Watch the video demo below to see how SpotiStats works.

## Technical Details

- Custom React hooks for state management and API interactions
- Central service layer for API requests
- Chart.js for creating dynamic and responsive data visualisations

## Key Learnings

- Implemented user authentication with Spotify's OAuth 2.0
- Implemented centralised authentication state management using React Context
- Created custom hooks to separate business logic from UI components and to maintain appropriate state management patterns
- Structured API calls efficiently using a service layer pattern

## Getting Started

1. Clone the repo:

```bash
git clone https://github.com/yourusername/spotistats.git
```

2. Install the dependencies

```bash
cd spotistats
npm install
```

3. Create a `.env` file in the root directory and add your Spotify API credentials:
   DO NOT FORGET TO ADD THE .env TO THE .gitignore!

   If you do not know how to obtain these credentials, go here: https://developer.spotify.com/documentation/web-api/tutorials/getting-started

```env
VITE_SPOTIFY_CLIENT_ID=your_client_id
VITE_SPOTIFY_REDIRECT_URI=your_redirect_uri
```

4. Start the development server:

```bash
npm run dev
```

## Video Demo

## Contact

Ashley Zhang: [ashzhang1@gmail.com](mailto:ashzhang1@gmail.com)

LinkedIn: [Ashley Zhang LinkedIn](https://www.linkedin.com/in/ashley-zhang1/)

## Acknowledgments

- [Spotify Web API](https://developer.spotify.com/documentation/web-api/)
