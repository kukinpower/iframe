document.querySelector(".slider input").addEventListener("input", 
function(){
	document.querySelector(".orig").style.width = this.value + "%";
});