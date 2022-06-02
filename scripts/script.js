let songArr = [];
let xhr = new XMLHttpRequest();
xhr.open('GET', 'scripts/tracks.json', false);
xhr.send();
if (xhr.status != 200) {
    console.log( xhr.status + ': ' + xhr.statusText );
} else {
    songArr = JSON.parse(xhr.responseText);
}
let songIndex = Math.floor(Math.random() * songArr.length);
let wavesurfer = WaveSurfer.create({
    container: '#waveform',
    mediaType: 'audio',
    mediaControls: true,
    responsive: true,
    waveColor: 'white',
    progressColor: 'darkgrey'
});
wavesurfer.load("media/sounds/" + songArr[songIndex].file);
document.addEventListener('DOMContentLoaded', function() {
    let playPause = document.querySelector('#playPause');
    playPause.addEventListener('click', function () {
        wavesurfer.playPause();
    });
});
let infoLine = document.querySelector('#trackInfo');
infoLine.innerHTML = '"' + songArr[songIndex].title + '" by ' + songArr[songIndex].artist;