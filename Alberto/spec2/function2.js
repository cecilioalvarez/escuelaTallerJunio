var sumaNumeros=function sumar(numero) {
  var suma=0;
  for (var i=0; i<numero; i++) {
    suma=suma+i;
  }
  return suma;
};

var productoNumeros=function productoNumeros(numero) {
  var producto=1;
  for (var i=1; i<=numero; i++) {
    producto=producto*i;
  }
  return producto;
};

var longitudArray=function longitudArray(array) {
return array.length;
};

var sumaArray=function sumaArray(sumar) {
  var suma=0;
  for (var i=0; i<sumar.length; i++) {
    suma=suma+sumar[i];
  }
  return suma;
};

var mayorArray=function mayorArray(array1,array2) {
  var suma=0;
  for (var i=0; i<array1.length; i++) {
    suma=suma+array1[i];
  }
  return array1;
};
  for (var i=0; i<array2.length; i++) {
    suma=suma+array2[i];
  }
  return array2;
};
  
exports.sumaNumeros=sumaNumeros;
exports.factorial=productoNumeros;
exports.longitudArray=longitudArray;
exports.sumaArray=sumaArray;
exports.mayorArray=mayorArray;
