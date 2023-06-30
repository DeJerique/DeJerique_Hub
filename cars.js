// Greetings Scripts
function showGreeting() {
    var currentTime = new Date();
    var currentHour = currentTime.getHours();
    var greeting;

    if (currentHour < 12) {
        greeting = "Good Morning &nbsp;&nbsp;";
    } else if (currentHour < 18) {
        greeting = "Good Afternoon &nbsp;&nbsp;";
    } else {
        greeting = "Good Evening &nbsp;&nbsp;";
    }

    var greetingElement = document.getElementById("greeting");
    greetingElement.innerHTML = greeting;

    var dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var dateElement = document.getElementById("date");
    dateElement.innerHTML = currentTime.toLocaleDateString(undefined, dateOptions).replace(/\./g, '/');
}

function updateTime() {
    var currentTime = new Date();
    var timeElement = document.getElementById("time");
    timeElement.innerHTML = currentTime.toLocaleTimeString();
}

// Call the functions when the page loads
window.onload = function () {
    showGreeting();
    setInterval(updateTime, 1000);
};