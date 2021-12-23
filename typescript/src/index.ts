import MediaPlayer from "./assets/MediaPlayer";
import AutoPlay from "./assets/plugins/AutoPlay";
import AutoPause from "./assets/plugins/AutoPause";
import Ads from "./assets/plugins/Ads";






const video = document.querySelector("video");
const btn_play: HTMLElement = document.querySelector("#playButton");
const btn_mute: HTMLElement = document.querySelector("#muteButton");

const player = new MediaPlayer({ el: video, plugins: [new AutoPlay(), new AutoPause(), , new Ads()] });

btn_play.onclick = () => player.tooglePlay();
btn_mute.onclick = () => player.toogleMute();


if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message)
    })
}