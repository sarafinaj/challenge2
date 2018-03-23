const time = new Date();
hours = time.getHours(),
minutes = time.getMinutes(),
seconds = time.getSeconds();

window.onload = function(){
	function checkTime(){
	//Van 0 tot 6 is avond
	//Van 6 tot 12 is ochtend
	//Van 12 tot 18 is middag
	//Van 18 tot 24:00 is avond
		if(hours >= 0 && hours < 6){
			//Plaats hierin je animatie bijvoorbeeld
			//animateBackground();
			console.log("Het is avond");
		} else if (hours >= 6 && hours < 12){
			//animateOchtend();
			console.log("het is ochtend");
		} else if (hours >= 12 && hours < 18){
			//animateSomething();
			console.log("Het is middag");
		} else if (hours >= 18 && hours < 24){
			//AnimateSomethingElse();
			console.log("Het is avond laat");
		} else{
			//De tijd is invalid
			console.log("is geen valide tijd");
		}

		setInterval(function(){
			console.log("Running Settimeout")
			checkTime();
		}, 1000);
	}
	checkTime();

	function getRandomPosition() {
		w = window.innerWidth;
		h = window.innerHeight;
		var randomW = Math.floor(Math.random()*h);
		var randomH = Math.floor(Math.random()*w);
		return [randomW,randomH];
	}

	function plaatsSterren(){

		var aantalSterrenklein = 150;
		var aantalSterrenGroot = 10;

		for(var i=0; i< aantalSterrenklein; i++){
			//Deze maakt kleinere sterren 
			//Een for loop die de kleine sterren op een random plek plaatst aan de x en de y as
			//De hoogte en breedte worden opgehaald met de inner width en height
			//De sterren worden vervolgens in de HTML geplakt 
			var container = document.getElementsByTagName('figure')[0];
			var img = document.createElement('img');
			img.setAttribute("alt", "een kleine ster");
			img.setAttribute("id", "sterrenklein");
			img.setAttribute("src", "images/sterklein.svg");
			container.appendChild(img);
			var xy = getRandomPosition();
			img.style.top = xy[0] + 'px';
			img.style.left = xy[1] + 'px';
		}

		for(var i=0; i< aantalSterrenGroot; i++){
			//Deze maakt grotere sterren
			//Een for loop die de grote sterren op een random plek plaatst aan de x en de y as
			//De hoogte en breedte worden opgehaald met de inner width en height
			//De sterren worden vervolgens in de HTML geplakt 
			var container = document.getElementsByTagName('figure')[2];
			var img = document.createElement('img');
			img.setAttribute("alt", "een grote ster");
			img.setAttribute("id", "sterrengroot");
			img.setAttribute("src", "images/stergroot.svg");
			container.appendChild(img);
			var xy = getRandomPosition();
			img.style.top = xy[0] + 'px';
			img.style.left = xy[1] + 'px';
		}
		console.log(w,h);
	}
	plaatsSterren();

// De tijd en datum

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = m + "/" + d + "/" + y;

function startTime() {
  const time = new Date();
hours = time.getHours(),
minutes = time.getMinutes(),
seconds = time.getSeconds();
  minutes = checkTime(minutes);
  seconds = checkTime(seconds);
  document.getElementById('time').innerHTML = hours + ":" + minutes + ":" + seconds;
	setInterval(function() {
	  	startTime();
	}, 1000);
}
startTime();

checkTime();

}

var tl = new TimelineMax({repeat:-1});
tl.to("#mainbackground", 60,{backgroundPosition: "0px -8192px", ease: Linear.easeNone}); // background met een oneidinge loop
TweenMax.to("#minuut", 100, {rotation:360, transformOrigin:"30px 150px", repeat:-1, ease:Linear.easeNone}); // animatie van de grote wijzer
TweenMax.to("#uur", 40, {rotation:360, transformOrigin:"20px 115px", repeat:-1, ease:Linear.easeNone}); // animatie van de kleine wijzer