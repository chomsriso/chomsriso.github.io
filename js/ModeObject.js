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
    
