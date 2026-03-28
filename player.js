// player.js

class MusicPlayer {
    constructor() {
        this.audio = new Audio();
        this.playlist = [];
        this.currentTrackIndex = 0;
    }

    loadPlaylist(trackList) {
        this.playlist = trackList;
    }

    play() {
        if (this.playlist.length > 0) {
            this.audio.src = this.playlist[this.currentTrackIndex];
            this.audio.play();
        }
    }

    pause() {
        this.audio.pause();
    }

    next() {
        this.currentTrackIndex = (this.currentTrackIndex + 1) % this.playlist.length;
        this.play();
    }

    previous() {
        this.currentTrackIndex = (this.currentTrackIndex - 1 + this.playlist.length) % this.playlist.length;
        this.play();
    }
}

// Example usage:
const player = new MusicPlayer();
player.loadPlaylist(["track1.mp3", "track2.mp3", "track3.mp3"]);
player.play();