
function setColorScheme(scheme) {
	var next = document.getElementsByClassName('next');
	var prev = document.getElementsByClassName('prev');
	switch(scheme){
    	case 'dark':
		next[0].src = "https://chomsriso.github.io/src/icon_nextPic-dark.svg";
		prev[0].src = "https://chomsriso.github.io/src/icon_nextPic-dark.svg";
      		break;
    	case 'light':
        	next.src = "https://chomsriso.github.io/src/icon_nextPic.svg";
        	prev.src = "https://chomsriso.github.io/src/icon_nextPic.svg";
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


const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
	const element = document.getElementById('swipeArea');
	element.addEventListener('touchstart', handleTouchStart, false);        
	element.addEventListener('touchmove', handleTouchMove, false);

	var xDown = null;                                                        
	var yDown = null;
}

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     
                                                                         
function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
}                                                
                                                                         
function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
                                                                         
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* right swipe */ 
            plusSlides(-1);
        } else {
            /* left swipe */
            plusSlides(1);
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* down swipe */ 
        } else { 
            /* up swipe */
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
}
    
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
