window.onload = function ()
{
    var seconds = 00;
    var tens = 00;

    var tensResults  = document.getElementById("tens");
    var secondsResults  = document.getElementById("seconds");
    var start = document.getElementById("btn-start");
    var stop = document.getElementById("btn-stop");
    var reset  = document.getElementById("btn-reset");

    var interval;
    start.onclick = function()
    {
    clearInterval(interval);
    interval = setInterval(startTimer,10);
}
stop.onclick = function()
{
    clearInterval(interval);
}
reset.onclick = function()
{
    clearInterval(interval);
    tens = "00";
    seconds = "00";
    tensResults.innerHTML = tens;
    secondsResults.innerHTML = seconds;
}

function startTimer()
{
    tens++;
    if (tens <= 9)
    {
     tensResults.innerHTML = "0" + tens;
    }
    if (tens > 9)
    {
     tensResults.innerHTML = tens;
    }
    if (tens > 99)
    {
     seconds++;
     secondsResults.innerHTML = "0" + seconds;
     tens = 0;
     tensResults.innerHTML = "0" + 0;
    }
    if (seconds > 9)
    {
        secondsResults.innerHTML = seconds;
    }
}


}
