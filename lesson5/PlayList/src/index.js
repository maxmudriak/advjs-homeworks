import Song from "./components/song";
import Playlist from "./components/playlist";
import Movie from "./components/movie";

const playList = new Playlist();

const song1 = new Song('testname', 'artist', '1:55');
const song2 = new Song('testname2', 'artist2', '2:55');

const movie1 = new Movie('movie1', '1984', '3:55:12');

playList.add(song1);
playList.add(song2);

playList.add(movie1);

const list = document.getElementById('list');
playList.render(list);

const play = document.getElementById('btn-play');
const stop = document.getElementById('btn-stop');
const next = document.getElementById('btn-next');

play.onclick = function () {
  playList.play();
  playList.render(list)
};
stop.onclick = function () {
  playList.stop();
  playList.render(list)
};
next.onclick = function () {
  playList.next();
  playList.render(list)
};
