//Función que funciona como manejador de evento
//al producirse el evento load (carga de la página)
function init() {
    //Ingresar los datos de los números a operar
    
    //Elemento div donde se mostrará el menú de las operaciones
    var operaciones = document.getElementById('operaciones');
    //Elemento div donde se mostrarán los resultados
    var resultado = document.getElementById('resultado');
    //Creando el contenido de la página
    var contenido = "<header>\n";
    contenido += "\t<h1></h1>\n";
    contenido += "</header>\n";
    contenido += "<nav class='menu'>\n";
    contenido += "<ul>\n";
    contenido += "\t<li>\n";
    contenido += "\t\t<a href=\"javascript:void(0)\"><span>CELCIUS A FARENHEIT</span></a>\n";
    contenido += "</li>\n";
    contenido += "</ul>\n";
    contenido += "</nav>\n";
//Colocar el contenido dentro del elemento div
operaciones.innerHTML = contenido;
//Preparando el manejo del evento click sobre los enlaces del menú
var opciones = document.getElementsByTagName('a');
//Recorrer todos los elementos de enlace (elementos a)
//y asignar el manejador del evento click
for(var i=0; i<opciones.length; i++){
    switch(i){
        case 0:
        //Metros a pies
            opciones[i].onclick = function(){
            var op1 = prompt('La cantidad de grados que desea convertir, por favor:','');
            resultado.innerHTML = "<p class=\"letterpress\">" + " La cantidad de grados Celcius a Fareneheit es de " + ((op1 * 9/5) + 32) + "</p>\n";
            }
        break;
        
        }
    }
}
window.onload = init;