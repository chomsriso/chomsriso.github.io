
function setColorScheme(scheme) {
	var next = document.getElementsByClassName('next');
	var prev = document.getElementsByClassName('prev');
	switch(scheme){
    	case 'dark':
		next[0].src = "https://chomsriso.github.io/src/icon_nextPic-dark.svg";
		prev[0].src = "https://chomsriso.github.io/src/icon_nextPic-dark.svg";
      		break;
    	case 'light':
        	next[0].src = "https://chomsriso.github.io/src/icon_nextPic.svg";
        	prev[0].src = "https://chomsriso.github.io/src/icon_nextPic.svg";
      		break;
  	}
}

function getPreferredColorScheme() {
  if (window.matchMedia) {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      return 'dark';
    } else {
      return 'light';
    }
  }
  return 'light';
}

function updateColorScheme(){
    setColorScheme(getPreferredColorScheme());
}

if(window.matchMedia){
  var colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
  colorSchemeQuery.addEventListener('change', updateColorScheme);
}

updateColorScheme();
    
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
