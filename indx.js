const apiUrl = 'https://openwhyd.org/hot/electro?format=json';
const trackList = document.getElementById('track-list');
const searchInput = document.getElementById('searchInput');
const trackForm = document.getElementById('trackForm');

let allTracks = [];

// Fetch tracks from OpenWhyd
fetch(apiUrl)
  .then((res) => res.json())
  .then((data) => {
    allTracks = data;
    renderTracks(allTracks);
  });

// Render tracks
function renderTracks(tracks) {
  trackList.innerHTML = '';
  tracks.forEach((track) => {
    const card = document.createElement('div');
    card.className = 'track-card';

    const videoId = track.eId?.split('/yt/')[1];
    const thumbnail = track.img || `https://img.youtube.com/vi/${videoId}/0.jpg`;

    card.innerHTML = `
      <img src="${thumbnail}" alt="${track.name}">
      <h3>${track.name}</h3>
      <button class="like-btn">❤️ Like (<span>0</span>)</button>
    `;

    const likeBtn = card.querySelector('.like-btn');
    const likeSpan = card.querySelector('span');
    let likes = 0;

    likeBtn.addEventListener('click', () => {
      likes++;
      likeSpan.textContent = likes;
    });

    trackList.appendChild(card);
  });
}

// Search functionality
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  const filtered = allTracks.filter((track) =>
    track.name.toLowerCase().includes(query)
  );
  renderTracks(filtered);
});

// Add new track
trackForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('trackName').value;
  const videoId = document.getElementById('trackUrl').value;

  const newTrack = {
    name: name,
    eId: `/yt/${videoId}`,
    img: `https://img.youtube.com/vi/${videoId}/0.jpg`,
  };

  allTracks.unshift(newTrack);
  renderTracks(allTracks);
  trackForm.reset();
});
