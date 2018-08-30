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
	popwin.style.padding = "6px";
	popwin.style.textAlign = "center";
	popwin.style.zIndex ="10000";
	popwin.style.fonFamily = '"Courier New", monospace';

}

function killContainer(){
		document.body.removeChild(document.getElementById("popwindow"));
}

function addKeyStroke(txt){
	setTimeout(()=>{
		document.getElementById("popwindow").innerText = document.getElementById("popwindow").innerText+txt;

    },63);
}


window.addEventListener('keydown', function(event) {
var win = document.getElementById("popwindow");

	if(win == null){
    	createContainer();
		var k = event.key.toString();
		addKeyStroke(k);

	}else{
		var txtLen = win.innerText.length;
		var k = event.key.toString();
		addKeyStroke(k);
		document.getElementById("popwindow").style.width = (5+(txtLen*.8))+"%";
		if(txtLen > 15){
		killContainer();
		}
	}
});
