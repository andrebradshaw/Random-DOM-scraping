var jdat = [{
	"keyword": "Front-end",
	"otherkeys": ["HTML5", "CSS", "JavaScript"],
	"description": " Front-end is a term that involves the building of webpages and user interfaces for web-applications. It implements the structure, design, behavior, and animation of everything you see on the screen when you open up websites, web applications, or mobile apps. The core 3 technologies that all modern front-end web developers work to master are HTML5, CSS, and JavaScript."
}, {
	"keyword": "AJAX",
	"otherkeys": ["XML", "XML", "HTML", "CSS", "JavaScript"],
	"description": " Ajax, short for Asynchronous Java and XML, has allowed developers to create interactive web-pages with rich interfaces with the help of XML, HTML, CSS, and JavaScript. It helps create better, faster, and more interactive web-applications."
}, {
	"keyword": "AMP",
	"otherkeys": ["HTML"],
	"description": " Google-backed project with the aim of speeding up the delivery of content through the use of stripped down code known as AMP HTML. Allows the pages to load (and pre-render in Google search) much faster than regular HTML."
}, {
	"keyword": "Angular",
	"otherkeys": ["JavaScript", "MVC"],
	"description": " A client-side JavaScript framework which is based on MVC architecture. It simplifies web development by offering automatic view/model synchronization. Angular is lightweight, supports all major browsers, and built for creating testable JavaScript code."
}, {
	"keyword": "Angular 2",
	"otherkeys": [""],
	"description": " A complete rework of the whole Angular framework from its basis. It’s closer to the new frameworks, while it brings many changes to how things work. Angular 2 is considered more mobile oriented."
}, {
	"keyword": "AngularFire",
	"otherkeys": ["Angular", "Firebase"],
	"description": " An officially supported library of Angular models for Firebase that allows to associate them with Firebase references. AngularFire simplifies the process of creating services that synchronise with your database. It can be used in conjunction with the Firebase client library."
}, {
	"keyword": "Angular CLI",
	"otherkeys": ["Angular"],
	"description": " A command line interface for Angular. The tool used to initialize, develop, scaffold and maintain Angular applications in a command line. Doesn’t require time for installing and configuring all the dependencies. "
}, {
	"keyword": "Atom",
	"otherkeys": [""],
	"description": " A hackable text editor that is used to search for and install new packages, write code with an autocomplete, split an interface to compare code across files, etc. "
}, {
	"keyword": "Aurelia",
	"otherkeys": ["JavaScript", "Angular"],
	"description": " A relatively new JavaScript framework, a rival to Angular, which favors convention over configuration and offers the adaptive data binding."
}, {
	"keyword": "Babel",
	"otherkeys": ["ES6/ES7", "ES5"],
	"description": " A tool for compiling ES6/ES7 code to ES5 code, which can be used today in any modern browser. It translates high level application code into lower level code or binaries."
}, {
	"keyword": "BabylonJS",
	"otherkeys": ["JavaScript", "HTML5", "WebGL", "WebGL"],
	"description": " A complete JavaScript framework for building 2D, 3D games with HTML5, WebGL and Web Audio. Open source 3D engine based on WebGL and JavaScript."
}, {
	"keyword": "Backbone.js",
	"otherkeys": ["JavaScript", "RESTful API"],
	"description": " A lightweight JavaScript library that allows to develop and structure client side applications that run in a web-browser. Backbone.js enforces that communication to the server should be done entirely through a RESTful API."
}, {
	"keyword": "BEM",
	"otherkeys": ["CSS"],
	"description": " BEM – meaning block, element, modifier – is a methodology that provides a structured CSS organization by arranging CSS classes into independent modules. It massively improves code maintainability and speeds up the development process."
}, {
	"keyword": "Blaze",
	"otherkeys": ["Meteor"],
	"description": " Meteor's frontend rendering system focused on templates and built with a modified version of handlebars called Spacebars. Facilitates creation of usable and maintainable user interfaces."
}, {
	"keyword": "Bootstrap",
	"otherkeys": ["HTML", "CSS", "JavaSсript", "Sass", "jQuery"],
	"description": " An open source toolkit for building responsive, mobile-first projects on the web with HTML, CSS, and JavaSсript. Enables to quickly prototype ideas or build the entire app using Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful plugins built on jQuery."
}, {
	"keyword": "Bourbon",
	"otherkeys": ["Sass", "CSS"],
	"description": " A library of pure Sass mixins that are designed to be simple and easy to use. No configuration required. The mixins aim to be as vanilla as possible, meaning they should be as close to the original CSS syntax as possible."
}, {
	"keyword": "Bower",
	"otherkeys": ["front-end", "HTML", "CSS", "JS"],
	"description": " A front-end package manager (also known as a package manager for the web) that is built by Twitter. It is used to manage components that contain HTML, CSS, JS, fonts, etc., helps developers download and update them, resolve their dependencies."
}, {
	"keyword": "Brackets",
	"otherkeys": ["HTML", "CSS", "JavaScript"],
	"description": " A web design and development tool. Brackets is a text editor for HTML, CSS and JavaScript files. It is lightweight, powerful, and offers a live preview of the changes made in the code. It also has built-in visual tools to assist in developing the code. Brackets supports Emmet, Beautify, Autoprefixer, and other extensions."
}, {
	"keyword": "Broccoli",
	"otherkeys": ["Node.js"],
	"description": " A highly efficient build system that can concatenate, transpile, and minify the code. Broccoli’s tree-based incremental rebuild system means that it can have fast compile-times, even on large projects. Runs on Node.js and is backend-agnostic."
}, {
	"keyword": "Browserify",
	"otherkeys": ["Node.js"],
	"description": " A development tool that allows to write Node.js-style modules that compile for use in the browser."
}, {
	"keyword": "Brunch",
	"otherkeys": ["HTML5"],
	"description": " A build tool that has large capabilities which are provided out of the box performance. It builds, lints, compiles, concatenates and shrinks HTML5 app in an ultra-simple way."
}, {
	"keyword": "CanvasJS",
	"otherkeys": ["HTML5", "JavaScript", "Android"],
	"description": " HTML5 and JavaScript charting library. It runs across devices including iPhone, iPad, Android, Windows Phone, desktops, etc. CanvasJS currently supports 14 different types of Charts."
}, {
	"keyword": "Chart.js",
	"otherkeys": ["HTML5"],
	"description": " A library of HTML5 interactive and animated charts that can be added to a website. Chart.js can be used by both designers and developers. It allows mixing different types of charts to better display datasets, plot complex datasets based on different conditions and add different colours to one chart."
}, {
	"keyword": "ClojureScript",
	"otherkeys": ["Clojure", "JavaScript"],
	"description": " Clojure programming language that compiles to JavaScript. It is a well-designed, stable functional and dynamic language with a rich set of immutable, persistent data structures. The primary goal is to make it easier to build complex and robust systems while keeping them simple"
}, {
	"keyword": "Compass",
	"otherkeys": ["CSS", "Sass"],
	"description": " CSS authoring framework that makes your stylesheets and markup easier to build and maintain. With Compass, you write your stylesheets in Sass instead of plain CSS."
}];


function unq(arrgh){
    return arrgh.filter((elm,pos,arr) =>{    
          return arr.indexOf(elm) == pos;  
	});
}

function getMatchingDescript(str){
var containArr = [];
	for(j=0; j<jdat.length; j++){
		var keyd = jdat[j].keyword.replace(/\W+/g, '.{0,3}?');
		var kw = new RegExp(keyd, "i");
		if(kw.test(str) === true){	
			console.log(keyd);		
			 containArr.push(jdat[j].keyword);
		}
	}
	return unq(containArr);
}

function generateTextBox() {
  var popContainer = document.createElement("div");
  document.body.appendChild(popContainer);
  popContainer.setAttribute("id", "pop_container");
  popContainer.style.display = "inline-block";
  popContainer.style.position = "fixed";
  popContainer.style.top = "5%";
  popContainer.style.left = "5%";
  popContainer.style.width = "75%";
  popContainer.style.height = "80%";
  popContainer.style.border = "1px solid DarkSlateGrey ";
  popContainer.style.background = "DarkSlateGrey";
  popContainer.style.borderRadius = "1em";
  popContainer.style.padding = "3px";
  popContainer.style.zIndex = "10000";
  popContainer.style.fontFamily = '"Courier New", monospace';

  var closeBtn = document.createElement("button");
  closeBtn.setAttribute("id", "note_btn_close");
  document.getElementById("pop_container").appendChild(closeBtn);
  document.getElementById("note_btn_close").innerText = "+";
  closeBtn.style.position = "absolute";
  closeBtn.style.background = "transparent";
  closeBtn.style.display = "inline-block";
  closeBtn.style.width = "1%";
  closeBtn.style.height = "2%";
  closeBtn.style.transform = "scale(4.5, 4.5) translate(3px, -6px) rotate(45deg)";
  closeBtn.style.borderRadius = "1em";
  closeBtn.style.transition = "all 366ms";
  closeBtn.style.transitionTimingFunction = "cubic-bezier(1,-1.12,.18,1.93)";
  closeBtn.style.padding = "0px";
  closeBtn.style.boxShadow = "0px";
  closeBtn.style.border = "0px";
  closeBtn.style.cursor = "pointer";
  closeBtn.style.userSelect = "none";
  closeBtn.style.fontFamily = '"Courier New", monospace';
  closeBtn.style.fontWeight = "bold";
  closeBtn.style.color = "Crimson";

  var inputElm = document.createElement("textarea");
  document.getElementById("pop_container").appendChild(inputElm);
  inputElm.setAttribute("id", "put_box_text");
  inputElm.style.width = "100%";
  inputElm.style.height = "80%";
  inputElm.style.padding = "6px";
  inputElm.style.border = "1px solid DarkSlateGrey";
  inputElm.style.background = "white";
  inputElm.style.borderRadius = "1em";
  inputElm.style.fontFamily = '"Courier New", monospace';

function checkContCreate(){
	var jcontElm = document.getElementById("jcont_box");
	if(jcontElm = null){
		createKWcontainer();
	} else {
	var promi = new Promise(res=>{
		res(document.getElementById("pop_container").removeChild(document.getElementById("jcont_box")));
	});
	promi.then(createKWcontainer());
	}
}
function createKWcontainer(){
  	var jcont = document.createElement("div");
  	  document.getElementById("pop_container").appendChild(jcont);
  	  jcont.setAttribute("id", "jcont_box");
  	  jcont.style.background = "DarkCyan";
  	  jcont.style.border = "1px solid DarkSlateGrey";
  	  jcont.style.width = "100%";
  	  jcont.style.height = "20%";
  	  jcont.style.borderRadius = "1em";
  	  jcont.style.cursor = "pointer";
  	  jcont.style.color = "white";
  	  jcont.style.fontFamily = '"Courier New", monospace';
}
  function close() {
    document.body.removeChild(document.getElementById("pop_container"));
  }
function showDescr(){
	var keyword = this.innerText;
	for(i=0; i<jdat.length; i++){
		if(keyword == jdat[i].keyword){
			alert(jdat[i].description);
		}
	}
}

  function createKWbutts() {
    var userinput = document.getElementById("put_box_text").value;
	var arr = getMatchingDescript(userinput);
    //document.getElementById("pop_container").removeChild(document.getElementById("jcont_box"));
	for(a=0; a<arr.length; a++){
	  var keyw = document.createElement("button");
  	  document.getElementById("jcont_box").appendChild(keyw);
  	  keyw.setAttribute("id", "keyw_box_"+arr[a]);
	  keyw.setAttribute("class", "keyw_box_kw");
  	  keyw.style.background = "DarkCyan";
  	  keyw.style.border = "1px solid DarkSlateGrey";
  	  keyw.style.width = "100%";
  	  keyw.style.height = "20%";
  	  keyw.style.borderRadius = "1em";
  	  keyw.style.cursor = "pointer";
  	  keyw.style.color = "white";
  	  keyw.style.fontFamily = '"Courier New", monospace';
	document.getElementById("keyw_box_"+arr[a]).innerText = arr[a];
	
	document.getElementById("keyw_box_"+arr[a]).addEventListener("click", showDescr);
	}
  }

  document.getElementById("note_btn_close").addEventListener("click", close);
  window.addEventListener('keyup', function(event){	
	var valstr = document.getElementById("put_box_text").value;
	var fp = new Promise(res=>{
		res(checkContCreate());
    });
	fp.then(createKWbutts(valstr));
  });
}

generateTextBox();
