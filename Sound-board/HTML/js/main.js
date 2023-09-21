// Author: Kyan Keise
// Date: Date: 25/03/22
// Title: Soundboard project

// Create a soundboard variable that plays audio clips on button press.
const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

// forEach loop that will loop through the sounds array and create a button for each sound.
sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = sound;

  // Event listener that will play the audio clip when the button is pressed.
  btn.addEventListener("click", () => {
    stopSongs();

    // Play the audio clip.
    document.getElementById(sound).play();
  });

  document.getElementById("buttons").appendChild(btn);
});

// Function that will stop the audio clips from overlapping.
function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);

    song.pause();
    song.currentTime = 0;
  });
}
