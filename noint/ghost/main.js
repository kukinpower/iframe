let face, follow, rect, left, topp, mouseX, mouseY, step, dist, load;
let bg = ["grey", "#2c3a47", "#2c2c47", "#472c42", "#2c3f47", "#2c473e", "#472c2c"];
let i = 0;

const MID_X = 85;
const MID_Y = 75;
const REFRESH = 7;
const MAX_STEP = 10;
const SLOWNESS = 50;
const LOADING = 0;

function onMouseMove(event){
	if (window.innerWidth > 1366)
	{
		if (left > mouseX + MID_X)
			document.getElementById("face").style.left = "10px";
		else if (left < mouseX - MID_X)
			document.getElementById("face").style.left = "40px";
		else 
			document.getElementById("face").style.left = face;
	}else{
		if (left > event.x)
			document.getElementById("face").style.left = "10px";
		else
			document.getElementById("face").style.left = "40px";
	}
	mouseX = event.x;
	mouseY = event.y;
}

function followMouse(){
	if (mouseX == left && mouseY == topp)
		return ;
	dist = Math.sqrt((mouseX - left)*(mouseX - left) + (mouseY - topp)*(mouseY - topp));
	step = (dist/SLOWNESS > MAX_STEP) ? MAX_STEP : dist/SLOWNESS; 
	left= step/dist * (mouseX - left) + left;
	topp = step/dist * (mouseY - topp) + topp;
	follow.style.top = topp - MID_Y + "px";
	follow.style.left = left - MID_X + "px";
}

function changeBgColor(event){
	if(event.keyCode == 32){
		document.getElementsByTagName("body")[0].style.backgroundColor = bg[i%bg.length]; //bg[Math.floor(Math.random()*bg.length)];
		i++;
	}
}

function start(){
	load.style.display = "None";
	follow.style.display = "Block";
	window.setInterval(followMouse, REFRESH);
	window.addEventListener('mousemove', onMouseMove);
}

window.addEventListener("keydown", changeBgColor);
face = document.getElementById("face").style.left;
follow = document.getElementById("ghost");
load = document.getElementsByClassName("loadingScreen")[0];
rect = follow.getBoundingClientRect();
left = rect.x;
topp = rect.y;
follow.style.top = topp - MID_Y + "px";
follow.style.left = left - MID_X + "px";
mouseX = rect.x;
mouseY = rect.y;
follow.style.display = "None";
setTimeout(start, LOADING)

