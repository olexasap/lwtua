function trackSelect() {
    let songIndex, songArr = [], currentTrack = [], localTracks = [], renewLocalTracks = [], selFile;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'scripts/tracks.json', false);
    xhr.send();
    if (xhr.status != 200) {
        console.log(xhr.status + ': ' + xhr.statusText);
    } else {
        songArr = JSON.parse(xhr.responseText);
    }
    if (!JSON.parse(localStorage.getItem('localTracks'))) {
        songIndex = Math.floor(Math.random() * songArr.length);
        currentTrack[0] = {
            'file': songArr[songIndex].file,
            'title': songArr[songIndex].title,
            'artist': songArr[songIndex].artist
        }
        window.localStorage.setItem('localTracks', JSON.stringify(currentTrack));
    }
    else {
        localTracks = JSON.parse(localStorage.getItem('localTracks'));
        let nowSongArr = songArr.filter(track => localTracks.every(item => item.file !== track.file));
        songIndex = Math.floor(Math.random() * nowSongArr.length);
        currentTrack[0] = {
            'file': nowSongArr[songIndex].file,
            'title': nowSongArr[songIndex].title,
            'artist': nowSongArr[songIndex].artist
        };
    }
    renewLocalTracks = localTracks.concat(currentTrack);
    window.localStorage.setItem('localTracks', JSON.stringify(renewLocalTracks));
    let infoLine = document.querySelector('#trackInfo');
    infoLine.innerHTML = '"' + currentTrack[0].title + '" by ' + currentTrack[0].artist;
    selFile = currentTrack[0].file;
    return selFile;
}

function trackPlay(file) {
    let wavesurfer = WaveSurfer.create({
        container: '#waveform',
        mediaType: 'audio',
        mediaControls: true,
        responsive: true,
        waveColor: 'white',
        progressColor: 'darkgrey'
    });
    wavesurfer.load("media/sounds/" + file);
    document.addEventListener('DOMContentLoaded', function () {
        let playPause = document.querySelector('#playPause');
        playPause.addEventListener('click', function () {
            wavesurfer.playPause();
        });
    });
}

let playFile;
let date = new Date();
let nowDate = {
    'year': date.getFullYear(),
    'month': date.getMonth(),
    'day': date.getDate()
}
let localDate = JSON.parse(localStorage.getItem('localDate'));
if (localDate == null || localDate['month'] < nowDate['month'] || localDate['day'] < nowDate['day']) {
    window.localStorage.setItem('localDate', JSON.stringify(nowDate));
    localDate = JSON.parse(localStorage.getItem('localDate'));
    playFile = trackSelect();
    trackPlay(playFile);
}
else {
    let localTracks = [], currentTrack = [];
    localTracks = JSON.parse(localStorage.getItem('localTracks'));
    currentTrack[0] = {
        'file': localTracks[localTracks.length - 1].file,
        'title': localTracks[localTracks.length - 1].title,
        'artist': localTracks[localTracks.length - 1].artist
    }
    let infoLine = document.querySelector('#trackInfo');
    infoLine.innerHTML = '"' + currentTrack[0].title + '" by ' + currentTrack[0].artist + '<span>(another version will be tomorrow)</span>';
    trackPlay(currentTrack[0].file);
}