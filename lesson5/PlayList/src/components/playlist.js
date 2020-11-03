class Playlist {
  constructor() {
    this.songs = [];
    this.currentIndex = 0;
  }

  add(song) {
    this.songs.push(song);
  }

  play() {
    const currentSong = this.songs[this.currentIndex];
    currentSong.play();
  }

  stop() {
    const currentSong = this.songs[this.currentIndex];
    currentSong.stop();
  }

  next() {
    this.stop();
    this.currentIndex++;
    if (this.currentIndex === this.songs.currentIndex) {
      this.currentIndex = 0;
    }
    this.play();
  }

  render(list) {
    list.innerHTML = '';
    return this.songs.forEach(song => {
      list.innerHTML += song.toHtml();
    });
  }
}

export default Playlist;