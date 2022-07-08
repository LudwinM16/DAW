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
    contenido += "\t\t<a href=\"javascript:void(0)\"><span>Metros a pies</span></a>\n";
    contenido += "</li>\n";
    contenido += "\t<li>\n";
    contenido += "\t\t<a href=\"javascript:void(0)\"><span>Metros a pulgadas</span></a>\n";
    contenido += "</li>\n";
    contenido += "\t<li>\n";
    contenido += "\t\t<a href=\"javascript:void(0)\"><span>Metros a yardas</span></a>\n";
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
            var op1 = prompt('La cantidad de metros que desea convertir, por favor:','');
            if(op1 <=0){
                alert("No es posible convertir esa cantidad de metros");
            }else{
                resultado.innerHTML = "<p class=\"letterpress\">" + " La cantidad de metros a pies es de " + op1 * 3.281 + "</p>\n";
            }
            }
        break;
        case 1:
            opciones[i].onclick = function(){
            var op1 = prompt('La cantidad de metros que desea convertir, por favor:','');
            if(op1 <=0){
                alert("No es posible convertir esa cantidad de metros");
            }else{
                resultado.innerHTML = "<p class=\"letterpress\">" + " La cantidad de metros a pulgadas es de " + op1 * 39.37 + "</p>\n";
            }
            }
        break;
        case 2:
            opciones[i].onclick = function(){
            var op1 = prompt('La cantidad de metros que desea convertir, por favor:','');
            if(op1 <=0){
                alert("No es posible convertir esa cantidad de metros");
            }else{
                resultado.innerHTML = "<p class=\"letterpress\">" + " La cantidad de metros a yardas es de " + op1 * 1.094 + "</p>\n";
            }
            }
        break;
        }
    }
}
window.onload = init;