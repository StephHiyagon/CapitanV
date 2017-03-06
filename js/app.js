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

window.addEventListener('load',function(){

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

function validar(){
var opciones = document.getElementsByName("name");
console.log(opciones[0]);
var seleccionado = false;
for(var i=0; i<opciones.length; i++) {
  if(opciones[i].checked) {
    seleccionado = true;
    break;
  }
}

if(!seleccionado) {
  return false;
}
}

/*    }

    return revisar1();
  }*/


/*
function revisar1 (){
  var contador=0;
  var preg1 = document.getElementById('p1');
  var preg2 = document.getElementById('p2');
  var preg3 = document.getElementById('p3');

}*/
