const audioFileInput = document.getElementById('audioFile');
const videoFileInput = document.getElementById('videoFile');
const videoPlayer = document.getElementById('videoPlayer');

let audioContext = new (window.AudioContext || window.webkitAudioContext)();
let audioSource, videoSource;

audioFileInput.addEventListener('change', function(e) {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = function(e) {
    audioContext.decodeAudioData(e.target.result, function(buffer) {
      analyzeBeat(buffer);
    });
  };
  reader.readAsArrayBuffer(file);
});

videoFileInput.addEventListener('change', function(e) {
  const file = e.target.files[0];
  videoPlayer.src = URL.createObjectURL(file);
});

function analyzeBeat(audioBuffer) {
  const audioData = audioBuffer.getChannelData(0);
  const bufferLength = audioBuffer.length;
  const sampleRate = audioBuffer.sampleRate;
  const threshold = 0.2; // Adjust this threshold as needed

  let beatTimes = [];

  for (let i = 0; i < bufferLength; i++) {
    if (audioData[i] > threshold && (i === 0 || audioData[i - 1] <= threshold)) {
      const beatTime = i / sampleRate;
      beatTimes.push(beatTime);
    }
  }

  syncVideo(beatTimes);
}

function syncVideo(beatTimes) {
  videoPlayer.currentTime = beatTimes[0]; // Start the video at the first beat

  videoPlayer.addEventListener('timeupdate', function() {
    const currentTime = videoPlayer.currentTime;
    let nextBeatTime;

    for (const beatTime of beatTimes) {
      if (beatTime > currentTime) {
        nextBeatTime = beatTime;
        break;
      }
    }

    if (nextBeatTime) {
      const timeToNextBeat = nextBeatTime - currentTime;
      if (timeToNextBeat < 0.1) { // Adjust this threshold as needed
        videoPlayer.currentTime = nextBeatTime;
      }
    }
  });
}

const playMusicButton = document.getElementById('playMusic');
const playVideoButton = document.getElementById('playVideo');

playMusicButton.addEventListener('click', function() {
  if (audioSource) {
    audioSource.start(0);
  }
});

playVideoButton.addEventListener('click', function() {
  if (!videoPlayer.paused) {
    videoPlayer.pause();
  } else {
    videoPlayer.play();
  }
});