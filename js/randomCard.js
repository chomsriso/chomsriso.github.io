function randomCard(){
	let card  = document.getElementById("thecard");
    let randnum = Math.floor(Math.random() * 42);
    
    card.src = "https://chomsriso.github.io/src/NW-deck/PNG-" + randnum.toString() + ".png";
    card.addEventListener('load', () => {
  		card.style.animation = 'none';
  	card.offsetHeight; /* trigger reflow */
  	card.style.animation = null; 
  // Perform actions after the image has loaded
});
}
