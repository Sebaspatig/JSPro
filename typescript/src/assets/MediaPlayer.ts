const btn__playPause = document.getElementById("btn_PlayPause");
const btn__muteUnmute = document.getElementById("btn__muteUnmute");

class MediaPlayer {
	media: HTMLMediaElement;
	plugins: Array<any>;
	container: HTMLElement;

	constructor(config) {
		this.media = config.el;
		this.plugins = config.plugins || [];
		this.initPlayer();
		this.initPlugins();
	}
	// Para trabajar con clases se crean los metodos por medio de prototype y nombre del metodo
	play() {
		// this guarda un valor en la instacia de Mediaplayer o cualquier otro objeto
		this.media.play();
	}
	pause() {
		this.media.pause();
	}
	tooglePlay() {
		if (this.media.paused) {
			this.play();
			btn__playPause.classList.remove("fa-play-circle");
			btn__playPause.classList.add("fa-pause-circle");
		} else {
			this.pause();
			btn__playPause.classList.remove("fa-pause-circle");
			btn__playPause.classList.add("fa-play-circle");
		}
	}

	initPlayer() {
		this.container = document.createElement("section");
		this.container.setAttribute('class', 'video__content');

		this.media.parentNode.insertBefore(this.container, this.media);
		this.container.appendChild(this.media);
	}

	private initPlugins() {
		this.plugins.forEach((plugin) => {
			plugin.run(this, btn__playPause);
		});
	}
	mute() {
		this.media.muted = true;
	}
	unmute() {
		this.media.muted = false;
	}
	toogleMute() {
		if (this.media.muted) {
			this.unmute();
			btn__muteUnmute.classList.remove("fa-volume-mute");
			btn__muteUnmute.classList.add("fa-volume-up");
		} else {
			this.mute();
			btn__muteUnmute.classList.remove("fa-volume-up");
			btn__muteUnmute.classList.add("fa-volume-mute");
		}
	}
}

export default MediaPlayer;
