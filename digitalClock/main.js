function updateClock () {
    const now = new Date();
    const hour = now.getHours().toString().padStart(2,0);
    const minute = now.getMinutes().toString().padStart(2,0);
    const second = now.getSeconds().toString().padStart(2,0);
    const timeString = `${hour}:${minute}:${second}`;
    document.getElementById("Clock").textContent =timeString;


}
updateClock();
setInterval(updateClock,1000);