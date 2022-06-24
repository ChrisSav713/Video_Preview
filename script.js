console.log("page loaded...");

var vid = document.getElementById("video");
vid.muted = true;
vid.addEventListener("mouseover", videoStart);
vid.addEventListener("mouseout", videoPause);

function videoStart() {
    vid.play();
}

function videoPause() {
    vid.pause();
}