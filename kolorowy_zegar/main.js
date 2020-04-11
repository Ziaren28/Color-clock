
let clock = document.getElementById('clock');

function time () {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();


    
    if(seconds < 10) {
        seconds = `0${seconds}`
    }
    if(minutes < 10) {
        minutes = `0${minutes}`
    }
    if(hours < 10) {
        hours = `0${hours}`
    }

    
    clock.innerHTML = `${hours} : ${minutes} : ${seconds}`;
    document.body.style.backgroundColor = `#${seconds}${minutes}${seconds}`
}

setInterval(time, 1000);