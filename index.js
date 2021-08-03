function AnalogClock(){
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    document.getElementById("hour").style.transform = `rotate(${hrotation}deg)`;
    document.getElementById("minute").style.transform = `rotate(${mrotation}deg)`;
    document.getElementById("second").style.transform = `rotate(${srotation}deg)`;
}

setInterval(AnalogClock,1000);


// digital clock js

let a;
let date;
let time;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
    a=new Date();
    date = a.toLocaleDateString(undefined, options);
    time=a.getHours()+":"+a.getMinutes()+":"+a.getSeconds();
    document.getElementById('time').innerHTML = time + "<br>on " + date;
}, 1000);
