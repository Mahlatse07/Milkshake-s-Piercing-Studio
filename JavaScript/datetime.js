
// Display the current date and time
function updateDateTime() {
    const now = new Date();

    const dateTime = now.toLocaleString("en-ZA", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    const dateTimeElement = document.getElementById("dateTime");

    if (dateTimeElement) {
        dateTimeElement.textContent = dateTime;
    }
}

// Update every second
updateDateTime();
setInterval(updateDateTime, 1000);