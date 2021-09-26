document.addEventListener('DOMContentLoaded', () => {

  // Unix timestamp (in seconds) to count down to

  // Set up FlipDown
  var flipdown = new FlipDown(1633766400)

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
      console.log('The countdown has ended!');
    });

});
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    events: {
      'onStateChange': onPlayerStateChange
    }
  });
}
function onPlayerStateChange() {
  //...
}
window.onclick = () => {
  player.unMute();
}