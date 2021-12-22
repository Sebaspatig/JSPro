const VERSION = "v1";

self.addEventListener("install", (event) => {
	event.waitUntil(precache());
});

self.addEventListener("fetch", (event) => {
	const request = event.request;

	if (request.method !== "GET") {
		return;
	}

	//buscar en cache
    event.respondWith(cacheResponse(request));
    
    // ACTUALIZAR CACHE
    event.waitUntil(updateCache(request))
});

async function precache() {
	const cache = await caches.open(VERSION);
	return cache.addAll([
		// "/",
		// "/index.html",
		// "/src/index.js",
		// "/src/assets/MediaPlayer.js",
		// "/src/assets/plugins/AutoPlay.js",
		// "/src/assets/plugins/AutoPause.ts",
		// "/src/assets/index.css",
		// "/src/assets/videos/Air-de-Buffons.mp4",
	]);
}

async function cacheResponse(request) {
	const cache = await caches.open(VERSION);
	const response = await cache.match(request);
	return response || fetch(request);
}
async function updateCache(request) {
	const cache = await caches.open(VERSION);
    const response = await fetch(request);
    return cache.put(request, response)
}
