const title = document.querySelector('h2');
const timerFieled = document.querySelector('b');



let countTimer = setInterval(() => {
    let timer =Math.floor(Date.now() /1000) - 1704067200 + 7200 ;
    timerFieled.textContent = String(timer).slice(1);

    if(timer > -1){
        title.textContent = 'Happy New Year !!!';
        clearInterval(countTimer);
        timerFieled.textContent = '';
    }
}, 1000);