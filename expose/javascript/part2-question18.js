
function time_every_second()
{
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
    setTimeout(time_every_second, 1000);
}

time_every_second();