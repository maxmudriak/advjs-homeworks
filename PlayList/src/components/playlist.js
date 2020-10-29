function Playlist() {
  this.songs = [];
  this.currentIndex = 0;
}

Playlist.prototype.add = function (song) {
  this.songs.push(song);
};

Playlist.prototype.play = function () {
  const currentSong = this.songs[this.currentIndex];
  currentSong.play();
};

Playlist.prototype.stop = function () {
  const currentSong = this.songs[this.currentIndex];
  currentSong.stop();
};

Playlist.prototype.next = function () {
  this.stop();
  this.currentIndex++;
  if (this.currentIndex === this.songs.currentIndex) {
    this.currentIndex = 0;
  }
  this.play();
};

Playlist.prototype.render = function (list) {
  list.innerHTML = '';
  return this.songs.forEach(song => {
     list.innerHTML += song.toHtml();
  });
};

export default Playlist;