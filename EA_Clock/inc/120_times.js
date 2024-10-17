//load the time into perusal
function ShowPerusalFN()
{
var myClock=new Date()
var myHours=myClock.getHours()
var myMinutes=myClock.getMinutes()
var mySeconds=myClock.getSeconds()
var ampm="am" 
if (myHours>12)
{
ampm="pm"
myHours=myHours-12
}
if (myHours==0)
myHours=12
if (myHours<=9)
myHours="0"+myHours
if (myMinutes<=9)
myMinutes="0"+myMinutes
if (mySeconds<=9)
mySeconds="0"+mySeconds
var qtxt=document.getElementById("tPerusal")
qtxt.innerHTML=myHours+":"+myMinutes+":"+mySeconds;
document.getElementById('btnPerusal').style.display = 'none'; // or
document.getElementById('btnTime').style.display = 'block';
}

function ShowTimeFN()
{

//time for straight after perusal
var d = new Date(); 
d.setMinutes(d.getMinutes());
myHours = d.getHours()
myMinutes = d.getMinutes()
mySeconds = d.getSeconds()
if (myHours>12)
{
ampm="pm"
myHours=myHours-12
}
if (myHours==0)
myHours=12
if (myHours<=9)
myHours="0"+myHours
if (myMinutes<=9)
myMinutes="0"+myMinutes
if (mySeconds<=9)
mySeconds="0"+mySeconds
qtxt=document.getElementById("tStart")
qtxt.innerHTML=myHours+":"+myMinutes+":"+mySeconds;
//

// 10 minute warning 
var r = new Date(); 
r.setMinutes(r.getMinutes() + 110);
myHours = r.getHours()
myMinutes = r.getMinutes()
mySeconds = r.getSeconds()
if (myHours>12)
{
ampm="pm"
myHours=myHours-12
}
if (myHours==0)
myHours=12
if (myHours<=9)
myHours="0"+myHours
if (myMinutes<=9)
myMinutes="0"+myMinutes
if (mySeconds<=9)
mySeconds="0"+mySeconds
qtxt=document.getElementById("t10")
qtxt.innerHTML=myHours+":"+myMinutes+":"+mySeconds;
//
//time for finish
var r = new Date(); 
r.setMinutes(r.getMinutes() + 120);
myHours = r.getHours()
myMinutes = r.getMinutes()
mySeconds = r.getSeconds()
if (myHours>12)
{
ampm="pm"
myHours=myHours-12
}
if (myHours==0)
myHours=12
if (myHours<=9)
myHours="0"+myHours
//this is so the myHours written out 
//when myHours=0 (meaning 12a.m) is 12
if (myMinutes<=9)
myMinutes="0"+myMinutes
if (mySeconds<=9)
mySeconds="0"+mySeconds
qtxt=document.getElementById("tFinish")
qtxt.innerHTML=myHours+":"+myMinutes+":"+mySeconds;
// get the button
var ele = document.getElementById("btnTime");
ele.style.display = "none"; //set to not display
document.getElementById("btnBlank").style.display = "block";
}