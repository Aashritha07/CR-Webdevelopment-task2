const audio = document.getElementById('audio');
const albumCover = document.getElementById('album-cover');
const songTitle = document.getElementById('song-title');
const artist = document.getElementById('artist');
const playButton = document.getElementById('play-button');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const progress = document.getElementById('progress');
const shuffleButton = document.getElementById('shuffle-button');
const repeatButton = document.getElementById('repeat-button');
const volumeSlider = document.getElementById('volume-slider');
const muteButton = document.getElementById('mute-button');

const playlist = [
    { title: 'Kanapadava male', artist: 'Artist 1', src: 'kanapadava.mp3', cover: 'album1.jpg' },
    { title: 'Adiye-Bachelor', artist: 'Artist 2', src: 'Adiye.mp3', cover: 'album2.jpg' },
    // Add more songs here
];

let currentSongIndex = 0;
let isPlaying = false;

function loadSong() {
    const song = playlist[currentSongIndex];
    audio.src = song.src;
    albumCover.src = song.cover;
    songTitle.textContent = song.title;
    artist.textContent = song.artist;
}


function playSong() {
    isPlaying = true;
    audio.play();
    playButton.textContent = 'Pause';
}

function pauseSong() {
    isPlaying = false;
    audio.pause();
    playButton.textContent = 'Play';
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
    loadSong();
    playSong();
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    loadSong();
    playSong();
}

playButton.addEventListener('click', () => {
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});
// Initialize the volume
audio.volume = volumeSlider.value;

// Function to update volume
function updateVolume() {
    audio.volume = volumeSlider.value;
}

// Function to toggle mute/unmute
function toggleMute() {
    if (audio.muted) {
        audio.muted = false;
        muteButton.textContent = 'Mute';
    } else {
        audio.muted = true;
        muteButton.textContent = 'Unmute';
    }
}

// Add event listeners for volume control and mute
volumeSlider.addEventListener('input', updateVolume);
muteButton.addEventListener('click', toggleMute);
prevButton.addEventListener('click', prevSong);
nextButton.addEventListener('click', nextSong);

audio.addEventListener('ended', nextSong);

// Rest of the code for the progress bar and other features...
