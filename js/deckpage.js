
let slideIndex = 1;
let isPaged = false;
let dots = document.getElementsByClassName("dot");
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function getWhere(ele) {
	if (!isPag) {
		let rawIndex = (ele.scrollLeft / ( ele.scrollWidth / dots.length ))  + 1 ;
    	slideIndex = Math.round(rawIndex);
        for (let i = 0; i < dots.length; i++) {
          	dots[i].className = dots[i].className.replace(" active", "");
        }
		dots[slideIndex-1].className += " active";
  	}    
    
    isPag = false;
}

function showSlides(n) {
  	let showarea = document.getElementById("swipeArea");
  	let x = showarea.scrollWidth / dots.length ;
  	if (n > dots.length) {slideIndex = 1}    
  	if (n < 1) {slideIndex = dots.length}  
  	for (let i = 0; i < dots.length; i++) {
    	dots[i].className = dots[i].className.replace(" active", "");
  	}
  	dots[slideIndex-1].className += " active";
  	isPag = true;
  	showarea.scrollLeft = (slideIndex-1) * x.toFixed();
}
