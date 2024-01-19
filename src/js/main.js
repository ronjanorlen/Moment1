"use strict"
// Console log för att testköra i inspektera-läge
console.log("Frontendbaserad Webbutveckling!")

// Visa en klocka med aktuell tid på startsidan
// Funktion för klocka
function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Visa klockan i format hh:mm:ss
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let timeString = hours + ":" + minutes + ":" + seconds;
    document.getElementById("clock").innerText = timeString;
}

// Updatera klockan i realtid
setInterval(updateClock, 1000);

// Anropa klocka direkt
updateClock();