var sumaNumeros = function sumar(numero) {

var suma=0;
for (var i = 0; i < numero; i++) {
        suma = suma + i;
    }
 return suma;
};


var productoNumeros = function productoNumeros(numero) {

var producto=1;
for (var i = 1; i <= numero; i++) {
        producto = producto * i;
    }
 return producto;
};


var arrayLongitud = function arrayLongitud(miarray) {

 return miarray.length;
};


var arraySuma = function arraySuma(sumar) {

var suma=0;
for (var i = 0; i < sumar.length; i++) {
suma=suma+sumar[i];
}
return suma;
};

exports.sumaNumeros = sumaNumeros;
exports.factorial = productoNumeros;
exports.arrayLongitud = arrayLongitud;
exports.arraySuma = arraySuma;
