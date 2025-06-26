# 🎶 KishMusic

A single-page music application built with HTML, CSS, and JavaScript that uses json-server for data persistence.

## Features

- **Search Functionality**: Search tracks by name or artist
- **Genre Filtering**: Filter tracks by genre
- **Dark/Light Theme Toggle**: Switch between dark and light modes
- **Add New Tracks**: Add your own tracks to the collection
- **Like Tracks**: Like your favorite tracks (persisted to database)
- **Delete Tracks**: Remove tracks from the collection

## Requirements Met

✅ **Single HTML file** - No redirects or reloads  
✅ **Public API/db.json** - Uses json-server with local db.json  
✅ **5+ objects with 3+ attributes** - Track objects with name, artist, genre, likes, etc.  
✅ **Async JSON communication** - All API calls use fetch() with JSON  
✅ **3 distinct event listeners**:
- `input` event for search functionality
- `change` event for genre filtering  
- `click` event for theme toggle
✅ **Array iteration** - Uses forEach, map, and filter methods  
✅ **json-server integration** - Full CRUD operations  

## Setup Instructions

1. Install json-server globally:
   ```bash
   npm install -g json-server
   ```

2. Start the json-server:
   ```bash
   npm start
   # or
   json-server --watch db.json --port 3000
   ```

3. Open `index.html` in your browser

4. The app will load tracks from the local database and allow full interaction

## Usage

- **Search**: Type in the search box to filter tracks by name or artist
- **Filter**: Use the genre dropdown to filter by music genre
- **Theme**: Click the theme toggle button to switch between dark/light modes
- **Add Track**: Fill out the form at the bottom to add new tracks
- **Like**: Click the heart button to like tracks (count persists)
- **Delete**: Click the delete button to remove tracks

## Technical Details

- **Frontend**: Vanilla HTML, CSS, JavaScript
- **Backend**: json-server for REST API
- **Data**: Local db.json file with track collection
- **Styling**: Responsive design with CSS Grid and Flexbox
- **Interactions**: Event-driven with proper async/await patterns