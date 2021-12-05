function countDown() {
    const endTime = Date.parse("jan 01, 2022 00:00:00");
    const startTime = new Date();
    const durationOfCount = endTime - startTime;

    
    const daysCount = Math.floor(durationOfCount /(1000 * 60 * 60 *24));
    const hourCount = Math.floor(durationOfCount /(1000 * 60 * 60));
    const minsCount = Math.floor(durationOfCount /(1000 * 60));
    const secCount = Math.floor(durationOfCount / 1000);

    const d = daysCount
    const h = hourCount - daysCount * 24;
    const m = minsCount - hourCount * 60;
    const s = secCount - minsCount * 60;

    document.getElementById('clock').innerHTML =
    '<div>' + d.toString().padStart(2,"0") + '<span>Days</span></div>' +
    '<div>' + h.toString().padStart(2, "0") + '<span>Hours</span></div>'+
    '<div>' + m.toString().padStart(2, "0") + '<span>Minutes</span></div>'+
    '<div>' + s.toString().padStart(2, "0") + '<span>Seconds</span></div>';

}


setInterval('countDown()', 1000);