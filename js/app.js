const hotDate = "2021-12-31";

function getTimeOut(hotDate) {
    const t = Date.parse(hotDate) - Date.parse(new Date());
        daysLeft = Math.floor(t / (1000 * 60 * 60 * 24)),
        hoursLeft = Math.floor((t / (1000 * 60 * 60) % 24)-3),
        minutesLef = Math.floor(t / (1000 * 60) % 60),
        secondsLeft = Math.floor((t / 1000)%60);
    return {
        'total': t,
        'daysLeft': daysLeft,
        'hoursLeft': hoursLeft,
        'minutesLeft': minutesLef,
        'secondsLeft': secondsLeft
    };
}

let ggg = getTimeOut(hotDate);
console.log(ggg);


function setTimer(selector, hotDate) {
    const timer = document.querySelector(selector),
    daysLeft = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateTimer, 1000);
    updateTimer();


    function updateTimer() {
        const t = getTimeOut(hotDate);

        console.log(t);

        daysLeft.innerHTML = t.daysLeft;
        hours.innerHTML = t.hoursLeft;
        minutes.innerHTML = t.minutesLeft;
        seconds.innerHTML = t.secondsLeft;

        if ( t.total <=0) {
            clearInterval(timeInterval);
        }
};

}
setTimer('.timer-container', hotDate);