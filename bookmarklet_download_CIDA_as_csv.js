var list = document.getElementsByClassName("large-11 columns program");
var containArr = [];
for(i=0; i<list.length; i++){
	var schoolname = list[i].getElementsByTagName("p")[0].innerText.replace(/,/g, '_');
	var degreeProg = list[i].getElementsByTagName("p")[1].innerText.replace(/,/g, '_');
	var website = list[i].getElementsByTagName("a")[0].href;
	var programDeetz = list[i].getElementsByClassName("program-details")[0];
	var phone = /(?<=Phone:\s*).+/.exec(programDeetz.innerText)[0];
	var email = /(?<=mailto:).+?(?=")/.exec(programDeetz.innerHTML)[0];
	var arr = new Array(schoolname,degreeProg,website,phone,email);
containArr.push(arr+'\r');
}

var output = 'school_name,degree_program,website,phone,email\r'+containArr.toString();

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
