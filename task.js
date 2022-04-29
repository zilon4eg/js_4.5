const countdown = document.getElementById('countdown');
numberPosition = countdown.textContent.lastIndexOf(':') + 2;
restSeconds = Number(countdown.textContent.substring(numberPosition));
// alert(restSeconds);

const timer = setInterval(() => {
    if (restSeconds === 0) {
        alert('Вы пбедили!');
        clearInterval(timer);
    }
    else {
        restSeconds -= 1;
        countdown.textContent = `${countdown.textContent.substring(0, numberPosition)}${restSeconds}`
    }
}, 1000);