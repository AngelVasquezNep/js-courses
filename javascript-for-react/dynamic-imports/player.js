import "https://vjs.zencdn.net/7.10.2/video.min.js";

console.log("VideoJs IMPORTED");

/**
 * Load stylesheet dynamically
 */
const link = document.createElement("link");

link.setAttribute("rel", "stylesheet");
link.setAttribute("href", "https://vjs.zencdn.net/7.10.2/video-js.css");

document.head.appendChild(link);

export default videojs;
