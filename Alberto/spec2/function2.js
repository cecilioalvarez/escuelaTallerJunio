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
  var suma2=0;
  for (var i=0; i<array1.length; i++) {
    suma=suma+array1[i];
  }

  for (var j=0; j<array2.length; j++) {
    suma2=suma2+array2[j];
  }
  if (suma2 > suma) {
    return suma2;
  } else {
    return suma;
  }
};

var grupo1="";
for (var i=1; i<=5; i++) {
  grupo1=grupo1+i;
}
expect(grupo1).toBe("12345");

var grupo2="";
for (var i=5; i>0; i--) {
  grupo2=grupo2+i;
}
var grupo3=grupo2+grupo1;
expect(grupo3).toBe("5432112345");


exports.sumaNumeros=sumaNumeros;
exports.factorial=productoNumeros;
exports.longitudArray=longitudArray;
exports.sumaArray=sumaArray;
exports.mayorArray=mayorArray;
