const timer = () => {

    const deadline = new Date("2022-11-17");

    function restTime(endTime) {

        let t = endTime - new Date();
        let days, hours, minutes, seconds;

        if (t <= 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;

        } else {
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
                hours = Math.floor((t / (1000 * 60 * 60) % 24)),
                minutes = Math.floor((t / (1000 * 60) % 60)),
                seconds = Math.floor((t / 1000) % 60);
        }
        return {
            "total": t,
            "days": days,
            "hours": hours,
            "minutes": minutes,
            "seconds": seconds
        };
    }

    function getZero(val) {
        if (val < 10) {
            return `0${val}`;
        } else {
            return val;
        }
    }

    function setClock(endTime, selector) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const valTime = restTime(endTime);

            days.innerHTML = getZero(valTime.days);
            hours.innerHTML = getZero(valTime.hours);
            minutes.innerHTML = getZero(valTime.minutes);
            seconds.innerHTML = getZero(valTime.seconds);

            if (valTime.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock(deadline, '.container1')


}

export default timer;