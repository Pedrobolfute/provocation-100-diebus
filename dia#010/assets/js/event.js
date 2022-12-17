function setIntervalImmediately(func, interval){
    func();
    return setInterval(func, interval)
}

pagedate = document.getElementsByClassName('date')[0];
pagetime = document.getElementsByClassName('time')[0];

setIntervalImmediately(update, 6000);

function update(){
    var datetime = new Date().toString();
    var datearray = datetime.split(" ");
    var date = [datearray[0],datearray[1],datearray[2],datearray[3]];
    var displaydate = date.join(" ");
    var times = datearray[4].split(":");
    var time = [times[0],times[1]];
    var displaytime = time.join(":");
    pagedate.innerHTML = displaydate;
    pagetime.innerHTML = displaytime;
}