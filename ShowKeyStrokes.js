//this is just a test build. it is broken


function createContainer(len){
var popwin = document.createElement("div");
document.body.appendChild(popwin);
popwin.setAttribute("id", "popwindow");
popwin.style.display = "inline-block";
popwin.style.position = "fixed";
popwin.style.top = "25%";
popwin.style.left = "65%";
popwin.style.width = "5%";
popwin.style.height = "5%";
popwin.style.background = "darkGrey";
popwin.style.borderRadius = "1em";
popwin.style.zIndex ="10000";
popwin.style.fonFamily = '"Courier New", monospace';
}

function killContainer(){
	setTimeout(()=>{
		document.body.removeChild(document.getElementById("popwindow"));
	},1666);
}

function addKeyStroke(txt){
	setTimeout(()=>{
		document.getElementById("popwindow").innerText = document.getElementById("popwindow").innerText+txt;

    },333);
}

window.addEventListener('keydown', function(event) {

	if(document.getElementById("popwindow") == null){
    	createContainer();
		var k = event.key.toString();
		addKeyStroke(k);
		document.getElementById("popwindow").style.width = (5+(document.getElementById("popwindow").innerText.length.length*.2))+"%";
		killContainer();
	}else{
		var k = event.key.toString();
		addKeyStroke(k);
		document.getElementById("popwindow").style.width = (5+(document.getElementById("popwindow").innerText.length*.2))+"%";
		killContainer();
	}
});
