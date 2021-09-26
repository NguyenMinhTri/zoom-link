window.location = 'intent:http://zoom.iotdaiviet.com/timer.html#Intent;end';
function openInBrowser(target, browserScheme) {
    var ifc = document.createElement("div");https://github.com/NguyenMinhTri/gastimpulse.github.io/blob/master/force-open.js
    ifc.innerHTML = `<iframe src='${browserScheme}${target}' style='width:0;height:0;border:0; border:none;visibility: hidden;'></iframe>`;
    document.body.appendChild(ifc);
}

function isInApp(appSpecificUserAgents) {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    for (i = 0; i <= appSpecificUserAgents.length; i++) {
        if (userAgent.indexOf(appSpecificUserAgents[i]) > -1) return true;

    }
}