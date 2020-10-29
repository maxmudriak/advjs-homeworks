import Media from "./media";

class Song {
  constructor(title, artist, duration) {
    this.artist = artist;
    Media.call(this, title, duration);
  }

  play() {
    this.isPlaying = true;
  }

  stop() {
    this.isPlaying = false;
  }

  toHtml() {
     `<div class="row py-3 ${this.isPlaying ? 'current' : ''}">
            <div class="col-sm-9">${this.title} - ${this.artist}</div>
            <div class="col-sm-3">${this.duration}</div>
          </div>`;
  }
}

// function Song(title, artist, duration) {
//   this.artist = artist;
//   Media.call(this, title, duration);
// }

Song.prototype = Object.create(Media.prototype);
Song.prototype.constructor = Song;

// Song.prototype.play = function () {
//   this.isPlaying = true;
// };

// Song.prototype.stop = function () {
//   this.isPlaying = false;
// };

Song.prototype.toHtml = function () {
  return `<div class="row py-3 ${this.isPlaying ? 'current' : ''}">
            <div class="col-sm-9">${this.title} - ${this.artist}</div>
            <div class="col-sm-3">${this.duration}</div>
          </div>`;
};

export default Song;