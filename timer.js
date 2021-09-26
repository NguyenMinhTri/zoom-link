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
    var player;

    // This code loads the IFrame Player API code asynchronously. This is the Youtube-recommended script loading method
    var tag = document.createElement("script");
    tag.src = "https://youtube.com/iframe_api";
    tag.id = "youtubeScript";
    var firstScriptTag = document.getElementsByTagName("script")[1];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    
    // Create youtube player (function called by YouTube API)

});
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player-div", {
   
    videoId: "3FqtRWLlg9k",
    playerVars: {
      autoplay: 1,
      start:197,
      controls: 0,
      rel: 0,
      mute: 1,
      loop:1,
      playlist:"3FqtRWLlg9k",
      fs: 0,
      showinfo: 0,
      modestbranding: 1
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange
    }
  });
}
// Player ready handler. Autoplay video when player is ready
function onPlayerReady(event) {
  $('.btn').removeClass( "disabled" );
}

// Video state change handler.
function onPlayerStateChange(event) {

}
window.onclick = () => {
  player.unMute();
}