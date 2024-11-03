// Function to update the current time
function updateTime() {
    const currentTimeElement = document.getElementById("current-time");
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const AMPM = hours >= 12 ? "PM" : "AM";
    const convertToTwelveHour = hours > 12 ? hours - 12 : hours;
    
    const timeString = `${convertToTwelveHour}:${minutes}:${seconds} ${AMPM}`;
    currentTimeElement.textContent = timeString;
}
    
// Update the time initially
updateTime();
    
// Update the time every second (1000 milliseconds)
setInterval(updateTime, 1000);