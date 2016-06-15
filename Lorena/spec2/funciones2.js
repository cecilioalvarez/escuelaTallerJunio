var sumaNumeros = function sumar(numero) {

    var suma = 0;
    for (var i = 0; i < numero; i++) {
        suma = suma + i;
    }
    return suma;
};


var productoNumeros = function productoNumeros(numero) {

    var producto = 1;
    for (var i = 1; i <= numero; i++) {
        producto = producto * i;
    }
    return producto;
};


var arrayLongitud = function arrayLongitud(miarray) {

    return miarray.length;
};


var arraySuma = function arraySuma(sumar) {

    var suma = 0;
    for (var i = 0; i < sumar.length; i++) {
        suma = suma + sumar[i];
    }
    return suma;
};

var arraySumaMayor = function arraySumaMayor(array1, array2) {

var suma = 0;
var suma2 = 0;
for (var i = 0; i < array1.length; i++) {
    suma = suma + array1[i];
}

for (var j = 0; j < array2.length; j++) {
    suma2 = suma2 + array2[j];
}

if (suma2 > suma) {
    return suma2;
} else {
    return suma;
}

};

exports.sumaNumeros = sumaNumeros;
exports.factorial = productoNumeros;
exports.arrayLongitud = arrayLongitud;
exports.arraySuma = arraySuma;
exports.arraySumaMayor = arraySumaMayor;
