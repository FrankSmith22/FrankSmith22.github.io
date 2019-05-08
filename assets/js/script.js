function initialize(){
	//initialize SCROLLSPY
    var scrollSpyElems = document.querySelectorAll('.scrollspy');
    var scrollSpyInstances = M.ScrollSpy.init(scrollSpyElems);
    
    introduction();
}

function introduction(){
	slideMeHolder();
	fadeInText();
}

function slideMeHolder(){
	let meHolder = document.querySelector('#meHolder');
	
	meHolder.style.transform = "translate(-50%, -50%) rotate(45deg)";
}

function fadeInText(){
	let frankHeader = document.querySelector('#frankHeader');
	let aboutMeHolder = document.querySelector('#aboutMeHolder');
	
	frankHeader.style.opacity = '1';
	aboutMeHolder.style.opacity = '1';
}