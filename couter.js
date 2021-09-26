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
  
    // Toggle theme
   
    
    var ver = document.getElementById('ver');
    ver.innerHTML = flipdown.version;
  });
  