var no_Lineas = document.getElementById ('texto_lineas');
var boton = document.getElementById('botonazo');
var dibujos = document.getElementById ('dibujo');
var ancho = dibujos.width;
var lienzo = dibujos.getContext('2d');
var color_Linea = "blue";    

boton.addEventListener("click", dibujoClick);

function getLineas() {
    lineas = parseInt(no_Lineas.value);
}

no_Lineas.addEventListener('keyup', getLineas)

function dibujarLinea(color, x_Inicial, y_Inicial, x_Final, y_Final) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(x_Inicial, y_Inicial);
    lienzo.lineTo(x_Final, y_Final);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoClick () {
    var l = 0; 
    var color_Linea = "blue";
    var espacio = ancho / lineas;
    for(l = 0; l < lineas; l++) {
      x1 = espacio * l;
      y1 = espacio * (l + 1);
      x2 = espacio * l;
      y2 = espacio * (l + 1);
      z = ancho - y2;
      dibujarLinea(color_Linea, 0, y1, x2, 300);
      dibujarLinea(color_Linea, 300, y1, z, 300);
    }
}

dibujarLinea(color_Linea, 1, 1, 1, 299);
dibujarLinea(color_Linea, 1, 300, 299, 299);
dibujarLinea(color_Linea, 300, 1, 299, 299);
dibujarLinea(color_Linea, 1, 1, 299, 1);

function limpiarLienzo () {
    lienzo.clearRect(0, 0, dibujos.width, dibujos.height);   
    dibujarLinea(color_Linea, 1, 1, 1, 299);
    dibujarLinea(color_Linea, 1, 300, 299, 299);
    dibujarLinea(color_Linea, 300, 1, 299, 299);
    dibujarLinea(color_Linea, 1, 1, 299, 1);
   }