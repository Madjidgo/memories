var imgCache = document.getElementsByTagName('img');
var tab = ['img1.jpeg','img2.jpeg','img3.jpeg','img4.jpeg','img5.jpg','img6.jpg','img7.jpg','img1.jpeg','img2.jpeg','img3.jpeg','img4.jpeg','img5.jpg','img6.jpg','img7.jpg'];
var img1= document.getElementById('img1');
var angle=0;
var tabR = [];
var count = 0;
var count1 = document.getElementById('count');
var joueur = prompt("Entrez votre nom:").toUpperCase();
 
 

// parcourir et retourner les img au click

for (let i = 0; i < imgCache.length; i++) {
	imgCache[i].addEventListener('click',fChange);
	function fChange (){
		imgCache[i].src = "img/"+tab[i];
		imgCache[i].alt = tab[i];
		tabR.push(tab[i]);

		if(tabR.length===2){
			// retourne carte en 1 tps donné
			setTimeout(fComp,1000)};

			// count

			imgCache[i].addEventListener('click',fCount);
	function fCount (){
		count1.innerHTML= joueur +" a utilisé: " +" "+ count++ +"coups";
		}
	}
}
// function comparer les img
function fComp(){
	if (tabR[0]===tabR[1]){
		tabR=[];
	}
	else{

		for (let y = 0; y < imgCache.length; y++) {
					imgCache[y];
			if((tabR[0]=== imgCache[y].alt)|| (tabR[1]=== imgCache[y].alt)){
				imgCache[y].src = "img/dos.jpg";

			}

		}
		// vider le tab
		tabR=[];
	}
}

  

// reset



