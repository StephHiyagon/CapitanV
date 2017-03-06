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
var boton1=document.getElementById('boton1');
boton1.addEventListener('click',validar);

window.addEventListener('load',function(event){

  var nombre = prompt("Ingrese su nombre");
  console.log(nombre);
  document.getElementById('n').innerHTML = nombre;
})

var mostarOcultar = function(divtexte) {
	var divtext = document.getElementById(divtexte);
	if (divtext.style.display == "block" ) {
		divtext.style.display = "none";
	} else{
		divtext.style.display = "block";
	}
}

function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {

		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}

function validar(event){
event.preventDefault();
var opciones1 = document.getElementsByName("pregunta1");
var opciones2 = document.getElementsByName("pregunta2");
var opciones3 = document.getElementsByName("pregunta3");
console.log(opciones1[0].value);
var seleccionado = false;
for(var i=0; i<opciones1.length; i++) {
  if(opciones1[i].checked) {
    seleccionado = true;
    break;
  } else {
    alert("Debe seleccionar alguna respuesta de la primera pregunta");
  }
}

/*if(!seleccionado) {
  return false;
}*/
}

/*    }

    return revisarQ1();
  }*/



function revisarQ1 (){
  var contador=0;
//  si selecciono el radioboton 1 en la primera pregunta es correcto y suma 1 en el contador sino 0
//  si selecciono el radioboton 2 en la segunda pregunta es correcto...
// si selecciono el radioboton 3 en la tercera pregunta es correcto...Al final retorna un texto con el numero de rptas correctas y desaparece el quiz


}
