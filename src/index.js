import MediaPlayer from "./assets/MediaPlayer.js";
import AutoPlay from "./assets/plugins/AutoPlay.js";
const video = document.querySelector("video");
const btn_play = document.querySelector("#playButton");
const btn_mute = document.querySelector("#muteButton");

const player = new MediaPlayer({ el: video, plugins: [new AutoPlay()] });

btn_play.onclick = () => player.tooglePlay();
btn_mute.onclick = () => player.toogleMute();
