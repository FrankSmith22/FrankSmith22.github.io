function initialize(){
	//initialize SCROLLSPY
    var scrollSpyElems = document.querySelectorAll('.scrollspy');
    var scrollSpyInstances = M.ScrollSpy.init(scrollSpyElems);
    //initialize PARALLAX
    var parallaxElems = document.querySelectorAll('.parallax');
    var parallaxInstances = M.Parallax.init(parallaxElems);
}