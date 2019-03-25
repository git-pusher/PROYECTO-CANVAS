var no_Lineas = document.getElementById ('texto_lineas');
var boton = document.getElementById('botonazo');
var dibujos = document.getElementById ('dibujo');
var dibujos2 = document.getElementById ('dibujo2');
var lienzo = dibujos.getContext('2d');
var lienzo2 = dibujos2.getContext('2d');
var ancho = dibujos.width;
var color_Linea = "blue";    
var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
  };
  var a = 150;
  var b = 150;


boton.addEventListener("click", dibujoClick);


function getLineas() {
    lineas = parseInt(no_Lineas.value);
}

no_Lineas.addEventListener('keyup', getLineas)

function dibujarLinea(color, x_Inicial, y_Inicial, x_Final, y_Final, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 2;
    lienzo.moveTo(x_Inicial, y_Inicial);
    lienzo.lineTo(x_Final, y_Final);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarLienzo() {
    dibujarLinea(color_Linea, 1, 1, 1, 299, lienzo);
    dibujarLinea(color_Linea, 1, 300, 299, 299, lienzo);
    dibujarLinea(color_Linea, 300, 1, 299, 299, lienzo);
    dibujarLinea(color_Linea, 1, 1, 299, 1, lienzo);
}

dibujarLienzo();

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
      dibujarLinea(color_Linea, 0, y1, x2, 300, lienzo);
      dibujarLinea(color_Linea, 300, y1, z, 300, lienzo);
    }
}

function limpiarLienzo () {
    lienzo.clearRect(0, 0, dibujos.width, dibujos.height);   
    dibujarLinea(color_Linea, 1, 1, 1, 299, lienzo);
    dibujarLinea(color_Linea, 1, 300, 299, 299, lienzo);
    dibujarLinea(color_Linea, 300, 1, 299, 299, lienzo);
    dibujarLinea(color_Linea, 1, 1, 299, 1, lienzo);
   }




// DIBUJAR CON TECLAS

function dibujarLineaTeclas(color, x_Inicial, y_Inicial, x_Final, y_Final, lienzo) {
    lienzo2.beginPath();
    lienzo2.strokeStyle = color;
    lienzo2.lineWidth = 2;
    lienzo2.moveTo(x_Inicial, y_Inicial);
    lienzo2.lineTo(x_Final, y_Final);
    lienzo2.stroke();
    lienzo2.closePath();
}

function dibujarLienzoTeclas() {
    dibujarLineaTeclas(color_Linea, 1, 1, 1, 299, lienzo);
    dibujarLineaTeclas(color_Linea, 1, 300, 299, 299, lienzo);
    dibujarLineaTeclas(color_Linea, 300, 1, 299, 299, lienzo);
    dibujarLineaTeclas(color_Linea, 1, 1, 299, 1, lienzo);
}

dibujarLienzoTeclas();

dibujarLineaTeclas("blue", 149, 149, 151, 151, lienzo);



document.addEventListener("keydown", dibujarTeclas);

function dibujarTeclas(evento)
{
  var colorcito = "blue";
  var movimiento = 5;
  switch(evento.keyCode)
  {
    case teclas.UP:
      dibujarLineaTeclas(colorcito, a, b, a, b - movimiento, lienzo);
      b = b - movimiento;
    break;
    case teclas.DOWN:
      dibujarLineaTeclas(colorcito, a, b, a, b + movimiento, lienzo);
      b = b + movimiento;
    break;
    case teclas.LEFT:
      dibujarLineaTeclas(colorcito, a, b, a - movimiento, b, lienzo);
      a = a - movimiento;
    break;
    case teclas.RIGHT:
      dibujarLineaTeclas(colorcito, a, b, a + movimiento, b, lienzo);
      a = a + movimiento;
    break;
  }
}

function limpiarLienzoTeclas () {
    lienzo2.clearRect(0, 0, dibujos2.width, dibujos2.height);   
    dibujarLineaTeclas(color_Linea, 1, 1, 1, 299, lienzo);
    dibujarLineaTeclas(color_Linea, 1, 300, 299, 299, lienzo);
    dibujarLineaTeclas(color_Linea, 300, 1, 299, 299, lienzo);
    dibujarLineaTeclas(color_Linea, 1, 1, 299, 1, lienzo);
   }