const clock = document.querySelector("#clock");

const convertTimeFormat = (time) => {
    return time.toString().padStart(2, "0");
    // return time.toString().length === 1 ? `0${time}` : time;
}

const getClock = () => {
    let date = new Date();
    let hours = convertTimeFormat(date.getHours());
    let minutes = convertTimeFormat(date.getMinutes());
    let seconds = convertTimeFormat(date.getSeconds());

    clock.innerHTML = `${hours}:${minutes}:${seconds}`
}

getClock();
setInterval(getClock, 1000);