const dayse1 = document.getElementById('days');
const hourse1 = document.getElementById('hours');
const minse1 = document.getElementById('mins');
const secondse1 = document.getElementById('seconds');
const newYears = "7 jun 2022";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const totalseconds = (newYearsDate - currentDate) / 1000;
    const days = Math.floor(totalseconds / 3600 / 24)
    const hours = Math.floor(totalseconds / 3600) % 24;
    const mins = Math.floor(totalseconds / 60) % 60;
    const seconds = Math.floor(totalseconds) % 60;
    console.log(days, hours, mins, seconds);

    dayse1.innerHTML = days
    hourse1.innerHTML = formatTime(hours)
    minse1.innerHTML = formatTime(mins)
    secondse1.innerHTML = formatTime(seconds)

}

countdown()
setInterval(countdown, 1000);

function formatTime(time) {
    return time < 10 ? ('0$(time)') : time;
}