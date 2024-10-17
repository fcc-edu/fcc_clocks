function show()
{
var Digital=new Date()
var hours=Digital.getHours()
var minutes=Digital.getMinutes()
var seconds=Digital.getSeconds()
var dn="am" 
if (hours>12)
{
dn="pm"
hours=hours-12
//this is so the hours written out is 
//in 12-hour format, instead of the default //24-hour format.
}
if (hours==0)
hours=12
//this is so the hours written out 
//when hours=0 (meaning 12a.m) is 12
if (minutes<=9)
minutes="0"+minutes
if (seconds<=9)
seconds="0"+seconds
var txt=document.getElementById("Tick")
txt.innerHTML="<div id=hours><div class=timetext>"+hours+"</div></div><div id=mins><div class=timetext>"+minutes+"</div><div id=am_pm>"+seconds+"</div></div>";
setTimeout("show()",1000)
}

