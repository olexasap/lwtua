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
const vizPlayer = document.getElementById("currentTrack");
vizPlayer.setAttribute("src", "media/sounds/" + songArr[songIndex].file);
vizPlayer.setAttribute("data-author", songArr[songIndex].artist);
vizPlayer.setAttribute("data-title", songArr[songIndex].title);