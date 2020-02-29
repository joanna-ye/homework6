var video;

function getVid() {
	video = document.querySelector("#myVideo");
}

function playVid() {
	video.play();
	let volume = document.querySelector("#volume");
	volume.innerHTML = video.volume * 100 + "%";
	console.log("Play Video");
}

function pauseVid() {
	video.pause();
	console.log("Pause Video");
}

function decreaseSpeed() {
	video.playbackRate *= 0.8;
  console.log("Speed is "+ video.playbackRate);
}

function increaseSpeed() {
	video.playbackRate *= 1.25;
	console.log("Speed is "+ video.playbackRate);
}

function skipAhead() {
	video.currentTime += 60;
	video.play();
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
		video.playbackRate = 1;
	}
	console.log("Current location is "+ video.currentTime);
}

function mute() {
	if (video.muted === false) {
		video.muted = true;
		console.log("Muted");
		document.querySelector("#mute").innerHTML = "Unmute";
	}
  else {
		video.muted = false;
		console.log("Unmuted");
		document.querySelector("#mute").innerHTML = "Mute";
	}
}

function changeVolume() {
	let slider = document.querySelector("#volumeSlider");
	let volume = document.querySelector("#volume");
	volume.innerHTML = slider.value + "%";
	video.volume = slider.value / 100;
	console.log("Volume is " + slider.value);
}


function gray() {
	let element = document.querySelector("#myVideo");
	element.classList.add("grayscale");
	console.log("In grayscale");
}

function color() {
	let element = document.querySelector("#myVideo");
	element.classList.remove("grayscale");
	console.log("In color")
}
