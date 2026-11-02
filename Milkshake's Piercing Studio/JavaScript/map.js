
// Create the map centred on the general Tembisa area
const studioMap = L.map("studioMap").setView(
    [-25.99636, 28.2268],
    13
);

// Add OpenStreetMap tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(studioMap);

// Add a marker showing the general area
const marker = L.marker([-25.99636, 28.2268]).addTo(studioMap);

marker.bindPopup(
    "<b>Milkshake's Piercing Studio</b><br>General Tembisa area only."
);