



let time = 0;
let seconds = 0;
let mSeconds = 0;
let interval = 100;

const start  = setInterval((i) => {
    time += parseInt((interval).toFixed(1));
    seconds = Math.floor(parseInt(time.toString().split('.')[0])/1000);

    mSeconds = parseInt((time/1000).toString().split('.')[1]) * 100;

    mSeconds ? mSeconds : mSeconds = "000";

    console.log(seconds, mSeconds)
}, interval)


