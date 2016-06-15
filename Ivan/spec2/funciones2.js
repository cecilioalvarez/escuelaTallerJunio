
var sumaNumeros = function sumar(numero) {


var suma= 0;
for (var i=0; i < numero; i++) {
suma = suma + i;

}

return suma;
};

var productoNumeros = function productoNumeros(numero) {


var producto= 1;
for (var i=1; i < numero; i++) {
producto = producto * i;

}

return producto;
};

var longitudarray = function longitudarray(unArray) {


return unArray.length;
};

var sumaarray = function sumaarray(unArray) {

  var suma= 0;
  for (var i=0; i <unArray.length; i++) {
  suma = suma + unArray[i];
}
return suma;
};
exports.sumaNumeros = sumaNumeros;
exports.factorial=productoNumeros;
exports.longitudarray=longitudarray;
exports.sumaarray=sumaarray;
