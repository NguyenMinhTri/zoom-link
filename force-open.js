
var standalone = window.navigator.standalone,
  userAgent = window.navigator.userAgent.toLowerCase(),
  safari = /safari/.test(userAgent),
  ios = /iphone|ipod|ipad/.test(userAgent);

if (ios) {
  if (!standalone && safari) {
    // Safari
  } else if (!standalone && !safari) {
    // iOS webview
  };
} else {
  if (userAgent.includes('wv')) {
    window.location = 'intent:https://zoom.iotdaiviet.com/timer.html#Intent;end';
    // Android webview
  } else {
    // Chrome
  }
};