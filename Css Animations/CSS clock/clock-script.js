
function setdate() {
	const d=new Date();
	const sec=d.getSeconds();
	const min=d.getMinutes();
	const hour=d.getHours();
	const secDeg=((sec/60)*360)+90;
	const minDeg=((min/60)*360)+((sec/60)*6)+90;
	const hrDeg=((hour/12)*360)+((min/60)*30)+90;
	document.querySelector('.second-hand').style.transform = `rotate(${secDeg}deg)`;
	document.querySelector('.min-hand').style.transform = `rotate(${minDeg}deg)`;
	document.querySelector('.hour-hand').style.transform = `rotate(${hrDeg}deg)`;
	//console.log(hour,min,sec);
}
setInterval(setdate,1000);