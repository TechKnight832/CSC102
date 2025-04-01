// Create an audio object for the sound file
var audio = new Audio('saxophone.mp3');

// Function to play the music
function playMusic() {
    // Play the audio
    audio.play();
    // Enable looping for continuous playback
    audio.loop = true;
}

// Function to stop the music
function stopMusic() {
    // Pause the audio
    audio.pause();
    // Reset the audio playback to the beginning
    audio.currentTime = 0;
}

// Assign the playMusic function to the Play button
document.getElementById('playSound').onclick = function() {
    playMusic(); // Call the playMusic function when the button is clicked
};

// Assign the stopMusic function to the Stop button
document.getElementById('stopSound').onclick = function() {
    stopMusic(); // Call the stopMusic function when the button is clicked
};