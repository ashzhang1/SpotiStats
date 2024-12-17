# SpotiStats

## Project Overview

SpotiStats is a web application that provides users with insights into their Spotify listening habits. By leveraging the Spotify Web API, SpotiStats visualises users' top artists and tracks with engaging charts and tables.

### Technical Details

- Custom React hooks for state management and API interactions
- Central service layer for API requests
- Chart.js for creating dynamic and responsive data visualisations

## Key Learnings

- Implemented user authentication with Spotify's OAuth 2.0
- Securely managed access tokens and user sessions
- Created custom hooks to separate business logic from UI components and to maintain appropriate state management patterns
- Structured API calls efficiently using a service layer pattern

## Getting Started

# SpotiStats 🎵

SpotiStats is an interactive web application that visualizes your Spotify listening habits, showing your top artists and tracks with engaging visualizations.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [What I Learned](#what-i-learned)

## Project Overview

SpotiStats is a web application that provides users with detailed insights into their Spotify listening habits. By leveraging the Spotify Web API, the application visualizes users' top artists and tracks, creating an interactive and engaging way to explore their musical preferences.

Key Features:

- Secure authentication with Spotify using OAuth 2.0
- Interactive visualizations of user's top artists
- Responsive design that works across desktop and mobile devices
- Real-time data fetching from Spotify's API
- Clean, modern user interface with intuitive navigation

Technical Implementation:

- Built with React and modern JavaScript features
- Custom React hooks for state management and API interactions
- Centralized service layer for API communication
- Component-based architecture for maintainability and reusability
- CSS modules for styled components with responsive design

## Features

- **Spotify Authentication**: Secure login using Spotify OAuth 2.0
- **Top Artists Display**: View your most-listened-to artists
- **Interactive Charts**: Visual representation of your listening habits
- **Responsive Design**: Seamless experience across all devices
- **Real-time Data**: Up-to-date statistics from your Spotify account

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

## Contact

Ashley Zhang - [ashzhang1@gmail.com](mailto:ashzhang1@gmail.com)

LinkedIn: [Ashley Zhang LinkedIn](https://www.linkedin.com/in/ashley-zhang1/)

## Acknowledgments

- [Spotify Web API](https://developer.spotify.com/documentation/web-api/)
