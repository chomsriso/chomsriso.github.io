function selectPag(el) {
	var pags = document.getElementsByClassName('pagitem');
    for (let i = 0; i < pags.length; i++) {
  		pags[i].src = "https://chomsriso.github.io/src/icon_page_dis.svg";
	}
    
    el.src = "https://chomsriso.github.io/src/icon_page_act.svg";
    
    let matches = el.id.match(/(\d+)/);
    let linkStr = "https://chomsriso.github.io/src/img_nw-" + matches[0] + ".png";
	document.getElementById("imgid").src = linkStr;
}

function nextPic() {
	var pags = document.getElementsByClassName('pagitem');
    var calnum;
    for (let i = 0; i < pags.length; i++) {
    
    	if(pags[i].src == "https://chomsriso.github.io/src/icon_page_act.svg") {
        	let matches = pags[i].id.match(/(\d+)/);
            calnum = Number(matches[0])+1;
    		let linkStr;
            
            if (calnum <= pags.length) {
                linkStr = "https://chomsriso.github.io/src/img_nw-" + calnum + ".png";
            }
            else {
                linkStr = "https://chomsriso.github.io/src/img_nw-" + 1 + ".png";
            }
            
			document.getElementById("imgid").src = linkStr;
            
        	pags[i].src = "https://chomsriso.github.io/src/icon_page_dis.svg";
        }
    }
    
    let theId;
    if (calnum <= pags.length) {
    	theId = "pag" + calnum ;
    }
    else {
    	theId = "pag" + 1 ;
    }
    
  	document.getElementById(theId).src = "https://chomsriso.github.io/src/icon_page_act.svg";
}

function previousPic() {
	var pags = document.getElementsByClassName('pagitem');
    var calnum;
    for (let i = 0; i < pags.length; i++) {
    
    	if(pags[i].src == "https://chomsriso.github.io/src/icon_page_act.svg") {
        	let matches = pags[i].id.match(/(\d+)/);
            calnum = Number(matches[0])-1;
    		let linkStr;
            
            if (calnum > 0) {
                linkStr = "https://chomsriso.github.io/src/img_nw-" + calnum + ".png";
            }
            else {
                linkStr = "https://chomsriso.github.io/src/img_nw-" + pags.length + ".png";
            }
            
			document.getElementById("imgid").src = linkStr;
            
        	pags[i].src = "https://chomsriso.github.io/src/icon_page_dis.svg";
        }
    }
    
    let theId;
    if (calnum > 0) {
    	theId = "pag" + calnum ;
    }
    else {
    	theId = "pag" + pags.length ;
    }
    
  	document.getElementById(theId).src = "https://chomsriso.github.io/src/icon_page_act.svg";
}

function setColorScheme(scheme) {
	var arrows = document.getElementsByClassName('arrowImg');
  switch(scheme){
    case 'dark':
      for (let i = 0; i < arrows.length; i++) {
        	arrows[i].src = "https://chomsriso.github.io/src/icon_nextPic-dark.svg";
        }
      break;
    case 'light':
      for (let i = 0; i < arrows.length; i++) {
        	arrows[i].src = "https://chomsriso.github.io/src/icon_nextPic.svg";
        }    
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
	const element = document.getElementById('imgid');
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
            previousPic();
        } else {
            /* left swipe */
            nextPic();
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
    

