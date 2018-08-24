function validate(elm,n){	if(elm != null){		return elm[n];	}else{		return '';	}}

var list = document.getElementsByClassName("large-11 columns program");
var containArr = [];
for(i=0; i<list.length; i++){
	var schoolname = list[i].getElementsByTagName("p")[0].innerText.replace(/,/g, ';');
	var degreeProg = list[i].getElementsByTagName("p")[1].innerText.replace(/,/g, ';');
	var website = list[i].getElementsByTagName("a")[0].href;
	var programDeetz = list[i].getElementsByClassName("program-details")[0];
	var person = validate(/.+?(?=\nPhone)|.+?(?=\n\nPhone)/.exec(programDeetz.innerText),0).replace(/,/g, ";");
	var phone = /(?<=Phone:\s*).+/.exec(programDeetz.innerText)[0];
	var email = /(?<=mailto:).+?(?=")/.exec(programDeetz.innerHTML)[0];
	var arr = new Array(schoolname,degreeProg,person,phone,email,website);
containArr.push(arr+'\r');
}

var output = 'school_name,degree_program,person,phone,email,website\r'+containArr.toString();

function dl(filename, text) {
  var elmi = document.createElement('a');
  elmi.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  elmi.setAttribute('download', filename);

  elmi.style.display = 'none';
  document.body.appendChild(elmi);

  elmi.click();

  document.body.removeChild(elmi);
}
var namethis = /(?<=org\/).+?(?=\/)/.exec(window.location.href);
dl(namethis+".csv", output)
