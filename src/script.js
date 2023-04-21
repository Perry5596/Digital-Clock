timer();
twelveHourTimer();
setDate();

function timer() {
    const d = new Date();
    const hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    let formattedMin = ("0" + min).slice(-2);
    let formattedSec = ("0" + sec).slice(-2);

    if (hour < 12) {
        document.getElementById('tag').innerHTML = 'AM';
    }
    if (hour > 12) {
        document.getElementById('tag').innerHTML = 'PM';
    }

    document.getElementById('clock-24').innerHTML = (hour + " : " + formattedMin + " : " + formattedSec);
    setInterval(timer, 1000);
}

function twelveHourTimer() {
    const d = new Date();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    let hour = d.getHours();
    let formattedMin = ("0" + min).slice(-2);
    let formattedSec = ("0" + sec).slice(-2);

    if (hour > 12) {
        hour -= 12;
    }
    
    document.getElementById('clock-12').innerHTML = (hour + " : " + formattedMin + " : " + formattedSec);
    setInterval(twelveHourTimer, 1000);
}

function setDate() {
    const monthNames = [ "", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    const d = new Date();
    const day = d.getDate();
    const year = d.getFullYear();
    var month = d.getMonth() + 1;
    var monthName = "";

    for (var i = 1; i <= 12; i++) {
        if (month == i) {
            monthName = monthNames[i];
            break;
        }
    }
    document.getElementById('date').innerHTML = (monthName + " " + day.toString() + ", " + year.toString());
    setInterval(timer, 1000);
}

function hideTag() {
    document.getElementById('tag').classList.toggle('hidden');
    document.getElementById('clock-12').classList.toggle('hidden');
    document.getElementById('clock-24').classList.toggle('hidden');
}