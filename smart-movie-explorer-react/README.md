# 🎬 Smart Movie Explorer

A modern, responsive movie discovery application built with React. Search for movies, explore detailed information, and manage your personal favorites — all in one place.



🔗 **Live Demo:** [Smart Movie Explorer](https://frontend-studio-inky.vercel.app/)



📂 **Source Code:** [View on GitHub](https://github.com/priyanka-srm/frontend-studio/tree/main/smart-movie-explorer-react)

---

## ✨ Features

### 🔍 Movie Discovery

- Search movies by title using the OMDb API.
- View movie posters, titles, release years, and types.
- Browse search results through a clean card-based layout.
- Get helpful feedback for empty searches and unavailable results.

### 🎞️ Movie Details

- View detailed movie information.
- Explore plot summaries, genres, directors, cast, ratings, and runtime.
- Open movie details in a dedicated modal.
- Close the modal using the Escape key.

### ❤️ Favorites

- Add movies to your favorites.
- Remove movies from your favorites.
- View saved movies in a dedicated Favorites section.
- Persist favorites using browser Local Storage.

### 🕘 Recent Search History

- Keep track of recent movie searches.
- Quickly revisit previous searches.

### 🎨 User Interface

- Modern dark-themed interface.
- Responsive layout for different screen sizes.
- Reusable React components.
- Smooth interactions and clear loading, error, and empty states.

---

## 🛠️ Tech Stack

| Technology        | Purpose                           |
| ----------------- | --------------------------------- |
| React             | Component-based UI development    |
| JavaScript (ES6+) | Application logic                 |
| Vite              | Development server and build tool |
| CSS3              | Styling and responsive design     |
| OMDb API          | Movie data and information        |
| Local Storage     | Persistent favorites              |
| ESLint            | Code quality and consistency      |
| Git & GitHub      | Version control                   |

---

## 📁 Project Structure
```
smart-movie-explorer-react/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── MovieDetailsModal.jsx
│   │   ├── MoviePoster.jsx
│   │   └── SearchBar.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

---

## 🚀 Getting Started

Follow these steps to run the project locally.

### 1. Clone the Repository
```
git clone https://github.com/priyanka-srm/frontend-studio.git
```

### 2. Navigate to the Project Folder
```
cd frontend-studio/smart-movie-explorer-react
```

### 3. Install Dependencies
```
npm install
```

### 4. Configure the OMDb API Key

This project uses the [OMDb API](https://www.omdbapi.com/) to retrieve movie information.

- Visit [OMDb API](https://www.omdbapi.com/apikey.aspx).
- Request an API key.
- Create a `.env.local` file in the project root.
- Add your API key:
```
VITE_OMDB_API_KEY=your_actual_api_key
```

**Important:** Vite exposes variables prefixed with `VITE_` to client-side code. Do not use a private or sensitive API key with this setup. For production applications requiring protected credentials, route API requests through a backend.

### 5. Start the Development Server
```
npm run dev
```

Open the local URL displayed in your terminal.

---

## 📜 Available Scripts

| Command           | Description                           |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Starts the development server         |
| `npm run build`   | Creates a production build            |
| `npm run preview` | Previews the production build locally |
| `npm run lint`    | Runs ESLint to check code quality     |

---

## 🔑 API Integration

Movie information is retrieved from the OMDb API.



The application uses the API to:

- Search for movies by title.
- Retrieve detailed information about selected movies.
- Display movie posters and metadata.

An API key is required to use the movie search functionality.

---

## 🧪 Quality Checks

The project includes development quality checks using ESLint and Vite.



Run the following commands before deployment:
```
npm run lint
npm run build
```

The application can also be manually tested for:

- Movie search functionality.
- Movie details modal interactions.
- Adding and removing favorites.
- Favorites persistence after page refresh.
- Recent search history.
- Responsive layout and error handling.

---

## 🔮 Future Enhancements

Potential improvements for future versions:

- Automated unit and component tests.
- Pagination or a Load More experience.
- Advanced movie filtering and sorting.
- Additional accessibility improvements.
- Backend API integration for protected API credentials.

---

  Built with React, curiosity, and a love for learning by building. 💜