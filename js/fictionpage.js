function select(el) {
	var tabs = document.getElementsByClassName('selectedtab');
    for (let i = 0; i < tabs.length; i++) {
  		tabs[i].style.display = "none";
	}
    el.querySelector("#stid").style.display = "flex";
}

function showpanel(panelid) {
    var rpanels = document.getElementsByClassName('rightpanel');
    for (let i = 0; i < rpanels.length; i++) {
  		rpanels[i].style.display = "none";
	}
    document.getElementById(panelid).style.display = "flex";
}

function selectbehind() {
	var rpanels = document.getElementsByClassName('rightpanel');
    var currentid = ""; 
    for (let i = 0; i < rpanels.length ; i++) {
  		if (rpanels[i].style.display === "flex"){
        	currentid = "t" + (1 + i);
        }
	}
    select(document.getElementById(currentid));
    document.getElementById("ddblock").style.display = "none";
}

includeHTML();

function showdd() {
  var x = document.getElementById("ddblock");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function previous() {
    var rpanels = document.getElementsByClassName('rightpanel');
    var currentid = ""; 
    var previousid = "";
    var tabid = "";
    for (let i = 1; i < rpanels.length ; i++) {
  		if (rpanels[i].style.display === "flex"){
        	currentid = "ch" + (1 + i);
            previousid = "ch" + i;
            tabid = "t" + i;
        }
	}
    document.getElementById(currentid).style.display = "none";
    document.getElementById(previousid).style.display = "flex";
    document.getElementById("ddblock").style.display = "none";
    select(document.getElementById(tabid));
}

function next() {
    var rpanels = document.getElementsByClassName('rightpanel');
    var currentid = ""; 
    var nextid = "";
    var tabid = "";
    for (let i = 0; i < rpanels.length - 1; i++) {
  		if (rpanels[i].style.display === "flex"){
        	currentid = "ch" + (1 + i);
            nextid = "ch" + (2 + i);
            tabid = "t" + (2 + i);
        }
	}
    document.getElementById(currentid).style.display = "none";
    document.getElementById(nextid).style.display = "flex";
    document.getElementById("ddblock").style.display = "none";
    select(document.getElementById(tabid));
}

function topFunction() {
	if (window.innerWidth <= 992) {
    	var rpanels = document.getElementsByClassName('rightpanel');
    	
    	for (let i = 0; i < rpanels.length ; i++) {
  			if (rpanels[i].style.display === "flex"){
                const yOffset = -174; 
                const y = rpanels[i].getBoundingClientRect().top + window.scrollY + yOffset;

                window.scrollTo({top: y, behavior: 'instant'});
        	}
		}
    	
    }
    else {
  	document.body.scrollTop = 0; // For Safari
  	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  	}
}

// Make multiple stickys

function arrdiv() {
    const x1 = document.getElementById("arr1");
    const x2 = document.getElementById("arr2");
    const x3 = document.getElementById("arr3");
    const x4 = document.getElementById("arr4");
    const x5 = document.getElementById("ddblock");
    const base = document.getElementById("baseid");
    document.body.appendChild(x1);
    document.body.appendChild(x2);
    document.body.appendChild(x3);
    document.body.appendChild(x4);
    document.body.appendChild(x5);
    document.body.insertBefore(x5,base)
    document.body.insertBefore(x4,x5)
    document.body.insertBefore(x3,x4)
    document.body.insertBefore(x2,x3)
    document.body.insertBefore(x1,x2)
}

function arrback() {
    const x1 = document.getElementById("arr1");
    const x2 = document.getElementById("arr2");
    const x3 = document.getElementById("arr3");
    const x4 = document.getElementById("arr4");
    const x5 = document.getElementById("ddblock");
    const back1 = document.getElementById("bk1");
    const back2 = document.getElementById("bk2");
    const back3 = document.getElementById("bk3");
    back1.appendChild(x1);
    back1.insertBefore(x1,back2)
    back2.appendChild(x2);
    back2.appendChild(x3);
    back3.appendChild(x4);
    back3.appendChild(x5);
}

function responsiveScript() {
  if (window.innerWidth <= 992) {
    arrdiv();
  }
  else {
  	arrback();
    document.getElementById("ddblock").style.display = "none";
  }
}
// run script on page load
responsiveScript();
// run script on window resize
window.addEventListener("resize", responsiveScript);

