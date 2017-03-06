alert("estoy aqui")
/*var s1= document.getElementById('s1');
var imprimir = document.getElementById('imprime');

function mostrarS1(event){
  //event.preventDefault();
  imprimir.innerHTML = "<h2>Sprint 1: Introducción a JavaScript</h2>" + "<br>" +
                        "<ol>" +  "<li>" + "Fundamentos de la Programación" + "</li>" +
                                  "<li>" + "Funciones" + "</li>" +
                                  "<li>" + "Arreglos" + "</li>" +
                                  "<li>" + "Objetos" + "</li>" + "</ol>"+
                        "<hr>" + "</hr>" +
                        "<h2>Quiz" + "<br>" +
                          "<ol>" +  "<li>" + "Existen 2 tipos de funciones" + "</li>" +
                                    "<li>" + "" + "</li>" +
                                    "<li>" + "Arreglos" + "</li>" +
                                    "<li>" + "Objetos" + "</li>" + "</ol>";

}

s1.addEventListener("click", mostrarS1);*/
//var preg1= document.



var mostarOcultar = function(divtexte) {
	var divtext = document.getElementById(divtexte);
	if (divtext.style.display == "block" ) {
		divtext.style.display = "none";
	} else{
		divtext.style.display = "block";
	}
}

function validar(){
  var rp1 = document.getElementsByClassName('transporte').value;
  var rp2= document.getElementById('r2').value;
  var rp3 = document.getElementById('r3').value;
  console.log(rp1);
  alert("Si estas validando");
  if(rp1 == 0 || rp2 == 0 || rp3== 0){
    alert("Seleccione alguna respuesta de la pregunta 1");
    return false;
  }else{
    return true;
  }
}

/*
function revisar (){
  var contador=0;

}*/
