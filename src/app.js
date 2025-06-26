const API_URL = 'http://localhost:3000/tracks';
let allTracks = [];
let isDarkMode = true;

// DOM elements
const trackList = document.getElementById('track-list');
const searchInput = document.getElementById('searchInput');
const genreFilter = document.getElementById('genreFilter');
const trackForm = document.getElementById('trackForm');
const themeToggle = document.getElementById('themeToggle');

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
  fetchTracks();
  setupEventListeners();
});

// Event Listener 1: Search functionality (input event)
searchInput.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  const filtered = allTracks.filter(track => 
    (track.name || '').toLowerCase().includes(query) || 
    (track.uNm || '').toLowerCase().includes(query)
  );
  renderTracks(filtered);
});

// Event Listener 2: Genre filter (change event)
genreFilter.addEventListener('change', (e) => {
  const selectedGenre = e.target.value;
  const filtered = selectedGenre ? 
    allTracks.filter(track => track.pl?.name === selectedGenre) : 
    allTracks;
  renderTracks(filtered);
});

// Event Listener 3: Theme toggle (click event)
themeToggle.addEventListener('click', () => {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle('light-mode', !isDarkMode);
  themeToggle.textContent = isDarkMode ? '🌙 Dark Mode' : '☀️ Light Mode';
});

function setupEventListeners() {
  trackForm.addEventListener('submit', handleAddTrack);
}

// Fetch tracks from json-server
async function fetchTracks() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Server not running');
    allTracks = await response.json();
    renderTracks(allTracks);
    populateGenreFilter();
  } catch (error) {
    console.error('Error fetching tracks:', error);
    trackList.innerHTML = '<p>Start json-server: npm start</p>';
  }
}

// Render tracks using array iteration (forEach)
function renderTracks(tracks) {
  trackList.innerHTML = '';
  
  tracks.forEach(track => {
    const card = document.createElement('div');
    card.className = 'track-card';
    
    const videoId = track.eId?.split('/yt/')[1] || 'default';
    const thumbnail = track.img || `https://img.youtube.com/vi/${videoId}/default.jpg`;
    
    card.innerHTML = `
      <img src="${thumbnail}" alt="${track.name}" onerror="this.src='https://via.placeholder.com/250x140?text=No+Image'">
      <h3>${track.name || 'Unknown Track'}</h3>
      <p>Artist: ${track.uNm || 'Unknown Artist'}</p>
      <p>Genre: ${track.pl?.name || 'Unknown'}</p>
      <div class="track-actions">
        <button class="like-btn" data-id="${track._id}">❤️ ${track.nbL || 0}</button>
        <button class="delete-btn" data-id="${track._id}">🗑️</button>
      </div>
    `;
    
    const likeBtn = card.querySelector('.like-btn');
    const deleteBtn = card.querySelector('.delete-btn');
    
    likeBtn.addEventListener('click', () => handleLike(track._id));
    deleteBtn.addEventListener('click', () => handleDelete(track._id));
    
    trackList.appendChild(card);
  });
}

// Populate genre filter using array methods (map + filter)
function populateGenreFilter() {
  const genres = allTracks
    .map(track => track.pl?.name)
    .filter((genre, index, arr) => genre && arr.indexOf(genre) === index)
    .sort();
  
  genreFilter.innerHTML = '<option value="">All Genres</option>';
  genres.forEach(genre => {
    const option = document.createElement('option');
    option.value = genre;
    option.textContent = genre;
    genreFilter.appendChild(option);
  });
}

// Handle adding new track
async function handleAddTrack(e) {
  e.preventDefault();
  
  const newTrack = {
    _id: Date.now().toString(),
    name: document.getElementById('trackName').value,
    uNm: document.getElementById('trackArtist').value,
    pl: { name: document.getElementById('trackGenre').value },
    eId: '/yt/default',
    img: 'https://via.placeholder.com/250x140?text=New+Track',
    nbL: 0,
    nbR: 0,
    score: 0
  };
  
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTrack)
    });
    
    if (response.ok) {
      allTracks.unshift(newTrack);
      renderTracks(allTracks);
      populateGenreFilter();
      trackForm.reset();
    }
  } catch (error) {
    console.error('Error adding track:', error);
  }
}

// Handle like functionality
async function handleLike(trackId) {
  const track = allTracks.find(t => t._id === trackId);
  if (!track) return;
  
  track.nbL = (track.nbL || 0) + 1;
  
  try {
    await fetch(`${API_URL}/${trackId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(track)
    });
    
    renderTracks(allTracks);
  } catch (error) {
    console.error('Error updating like:', error);
  }
}

// Handle delete functionality
async function handleDelete(trackId) {
  if (!confirm('Are you sure you want to delete this track?')) return;
  
  try {
    await fetch(`${API_URL}/${trackId}`, { method: 'DELETE' });
    allTracks = allTracks.filter(track => track._id !== trackId);
    renderTracks(allTracks);
    populateGenreFilter();
  } catch (error) {
    console.error('Error deleting track:', error);
  }
}