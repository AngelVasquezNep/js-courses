window.playImage.addEventListener("click", function (event) {
  event.target.classList.add("hidden");

  import("./player.js")
    .then(({ default: videojs }) => {
      window.starsVideo.classList.remove("hidden");

      const player = videojs("starsVideo", {
        controls: true,
        preload: "auto",
      });
    })
    .catch((error) => {
      console.error(error.message);
    });
});
