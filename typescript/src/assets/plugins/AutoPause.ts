import MediaPlayer from "../MediaPlayer";

const btn__playPause = document.getElementById("btn_PlayPause");

class AutoPause {
	private threshold: number;
	private player: MediaPlayer;

	constructor() {
		this.threshold = 0.25;
		this.handlerIntersection = this.handlerIntersection.bind(this);
		this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
	}
	run(player) {
		this.player = player;
		const observer = new IntersectionObserver(this.handlerIntersection, {
			threshold: this.threshold,
		});

		observer.observe(player.media);

		document.addEventListener("visibilitychange", this.handleVisibilityChange);
	}

	private handlerIntersection(entries: IntersectionObserverEntry[], btn) {
		const entry = entries[0];
		const isVisible = entry.intersectionRatio >= this.threshold;
		isVisible
			? [
					this.player.play(),
					btn__playPause.classList.remove("fa-play-circle"),
					btn__playPause.classList.add("fa-pause-circle"),
			  ]
			: [
					this.player.pause(),
					btn__playPause.classList.add("fa-play-circle"),
					btn__playPause.classList.remove("fa-pause-circle"),
			  ];
	}

	private handleVisibilityChange() {
		const isVisible = document.visibilityState === "visible";

		isVisible
			? [
					this.player.play(),
					btn__playPause.classList.remove("fa-play-circle"),
					btn__playPause.classList.add("fa-pause-circle"),
			  ]
			: [
					this.player.pause(),
					btn__playPause.classList.add("fa-play-circle"),
					btn__playPause.classList.remove("fa-pause-circle"),
			  ];
	}
}

export default AutoPause;
