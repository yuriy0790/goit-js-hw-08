import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const LOCALSTORAGE_KEY = 'videoplayer-current-time';
const throttle = require('lodash.throttle');

function getTime(event) {
  localStorage.setItem(LOCALSTORAGE_KEY, event.seconds);
}

player.on('timeupdate', throttle(getTime, 1000));

player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY) || 0);

// player.off('timeupdate');
