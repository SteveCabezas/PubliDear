// JavaScript Document
window.addEventListener('load',function(){
	console.log('El contenido ah cargado!');
	
	var imagenes=[];
	var tiempo=2000;
	
	imagenes[0]= 'images/vyv.jpg';
	imagenes[1]='images/uomo-venetto.png';
	imagenes[2]='images/machler.png';
	imagenes[3]='images/7081.jpg';
	imagenes[4]='images/dlip.png';
	imagenes[5]='images/embajada.png';
	
	var indiceImagenes = 0;
	function cambiarImagenes(){
		document.slider.src = imagenes[indiceImagenes];
		if(indiceImagenes < 5){
			indiceImagenes++;
			}else{
				indiceImagenes = 0;
			}
		}
		setInterval(cambiarImagenes,tiempo);

	
});