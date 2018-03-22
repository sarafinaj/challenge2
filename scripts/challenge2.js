const time = new Date();
//dit is onze algemene date-time die in een global scope bevind dit is ten allen tijden toegangklijk
hours = time.getHours(),
minutes = time.getMinutes(),
seconds = time.getSeconds();

// function linkTime{
// 	var groteWijzer = document.getElementById("minuut");
// 	var kleineWijzer = document.getElementById("uur");
// }	
//console.log(time.getHours());
//console.log(time.getMinutes());
//console.log(time.getSeconds());

function setDate(){
	const time = new Date();
	minuten = time.getMinutes();
 	console.log(minuten);

 	uren = time.getHours();
 	console.log(uren);

 	if(uren == 0 && uren < 6){

 	} else if(uren >= 6 && uren < 12){

 	} else if(uren >= 12 && uren < 18) {
 		console.log("het is tussen 12 en 6");
 		// midTime();
 	}
}

window.onload = function(){
	function checkTime(){
	//deze heb ik erbij gemaakt je kan het aanpassen hoe je wilt, hieronder beschrijf ik de denkwijze
	// van 12 uur in de avond tot 8 uur is meestal nog avond
	//12 uur bestaat niet in javascript dateobject, 12 uur = 00:00, dus 11:59 > wordt 00:00
	//dus van 0 tot 6 is avond
	//dus van 6 tot 12 is ochtend
	//dus van 12 tot 18 is middag
	//dus van 18 tot 24:00 is avond
	//om tijden te checken moeten datetime gebruiken die heb ik boven helemaal ge initialiseerd zie boven
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

		setTimeout(function(){
			console.log("Running Settimeout")
			checkTime();
			//This needs to run every X amount you decide, je kan het beste boven 30 zetten of meer
		}, 30000);
	}

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
			//figure moet niet 0 zijn in aantalsterrengroot > 1 of 2 
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
		console.log(w,h);

		for(var i=0; i< aantalSterrenGroot; i++){
			//figure moet niet 0 zijn in aantalsterrengroot > 1 of 2 
			//Dit moet 2 zijn niet 1, ik heb het veranderd naar 2
			//momenteel heeft je CSS voor sterrengroot een width en een height die heel klein zijn, je moet dat aanpssen.
			//je grote sterren zijn dus nu even groot als je kleine sterren
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
}

// function midTime(){
// 	//6 tot 12
// 	var background = document.getElementsByClassName('background')[0];
// 	console.log("dit is de achtergrond animatie voor 12 en 6")
// 	TweenMax.to(background, 3, {backgroundImage:"linear-gradient(to bottom, #FFFFAC, #A0D3E0, #FCFEF2, #FCFEDB, #FACA3B, #FA9C3B, #3C0055, #0B0055, #0B003A, #0B0055, #3C0055, #A0D3E0, #FFFFAC)"});
// 	//var tl = new TimeLineMax({yoyo: true}); 
// }

setDate();

// setInterval(setDate, 1000);


// var minuutCirkel = document.getElementById('minuut');
// var uurCirkel = document.getElementById('uur');


//TWEENMAX//
//var tl = new TimelineMax();

//var tl = new TimelineMax();
//tl1.to({cirkelgroot, -1, Background-color})

// var tl = new TimelineMax({repeat:-1});
// tl.to("#mainbackground", 60,{backgroundPosition: "0px -8192px", ease: Linear.easeNone}); // background met een oneidinge loop

// var tl = new TimelineMax({repeat:0});
// tl.to(minuut, 1, {top:200, left:880});

TweenMax.to("#minuut", 100, {rotation:360, transformOrigin:"30px 150px", repeat:-1, ease:Linear.easeNone}); // animatie van de grote wijzer

TweenMax.to("#uur", 40, {rotation:360, transformOrigin:"20px 115px", repeat:-1, ease:Linear.easeNone}); // animatie van de kleine wijzer


// var mainHeading = document.getElementById('#scaleclock');

// var tl = new TimelineMax();

// if ()
// tl.to("#scaleclock", 1, {scale: 0.5});

// De tijd en datum
n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = m + "/" + d + "/" + y;

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  // add a zero in front of numbers<10
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
  t = setTimeout(function() {
    startTime()
  }, 500);
}
startTime();













