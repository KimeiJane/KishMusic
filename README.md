# 🎶 KishMusic

**Author:** Jane Kimei

## Description

KishMusic is a modern, single-page music application that allows users to browse, search, and manage a collection of music tracks. Built with vanilla HTML, CSS, and JavaScript, it features a sleek dark/light theme toggle, real-time search functionality, genre filtering, and full CRUD operations powered by json-server.

## Features

- 🔍 **Real-time Search** - Search tracks by name or artist
- 🎭 **Genre Filtering** - Filter tracks by music genre
- 🌙 **Theme Toggle** - Switch between dark and light modes
- ➕ **Add Tracks** - Add new tracks to your collection
- ❤️ **Like System** - Like your favorite tracks (persisted)
- 🗑️ **Delete Tracks** - Remove tracks from collection
- 📱 **Responsive Design** - Works on all device sizes

## Project Setup Instructions

### Prerequisites
- Node.js installed on your system
- A modern web browser

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/janet-kish/KishMusic.git
   cd KishMusic
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the json-server:**
   ```bash
   npm start
   ```
   This will start the API server on `http://localhost:3000`



### Alternative Setup Methods

**Using the startup script:**
```bash
chmod +x start.sh
./start.sh
```

**Manual json-server start:**
```bash
npx json-server --watch db.json --port 3000
```

## Live Demo

🌐 **[View Live Site](https://janet-kish.github.io/KishMusic/)**

*Note: The live demo uses a static version. For full functionality including add/edit/delete features, run locally with json-server.*

## Technical Requirements Met

✅ **Single HTML Page** - No redirects or page reloads  
✅ **Public API Integration** - Uses json-server with local database  
✅ **Async JSON Communication** - All API calls use fetch() with JSON  
✅ **3+ Event Listeners** - input, change, click events  
✅ **Array Iteration** - Uses forEach, map, filter methods  
✅ **Form Validation** - Required fields with proper validation  
✅ **Responsive Design** - Mobile-friendly layout  



## Usage

1. **Browse Tracks** - View the collection of music tracks with thumbnails
2. **Search** - Type in the search box to filter by track name or artist
3. **Filter by Genre** - Use the dropdown to filter tracks by genre
4. **Toggle Theme** - Click the theme button to switch between dark/light modes
5. **Add New Track** - Fill out the form to add tracks to your collection
6. **Like Tracks** - Click the heart button to like tracks
7. **Delete Tracks** - Click the delete button to remove tracks

## Technologies Used

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Backend:** json-server (REST API)
- **Styling:** CSS Grid, Flexbox, CSS Variables
- **Data:** JSON format with local persistence

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Copyright and License

© 2024 Janet Kish. All rights reserved.

This project is licensed under the MIT License - see below for details:

MIT License


## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Contact

Janet Kish - [GitHub Profile](https://github.com/janet-kish)

Project Link: [https://github.com/janet-kish/KishMusic](https://github.com/janet-kish/KishMusic)