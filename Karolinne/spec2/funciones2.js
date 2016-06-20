var sumaNumeros= function sumar (numero) {
  var suma=0;
for (var i=0;i<numero;i++){
  suma=suma+i;
}
return suma;
};
var productoNumeros= function productoNumeros (numero) {
  var producto=1;
for (var i=1;i<=numero;i++){
  producto=producto*i;
}
return producto;
};
var longitudArray= function longitudArray (unarray) {

return unarray.length;
};
var sumaArray= function sumaArray (unarray) {
var total=0;
for(var i=0;i<unarray.length;i++){
total=total+unarray[i];
}
return total;
};

exports.sumaNumeros=sumaNumeros;
exports.factorial=productoNumeros;
exports.longitudArray=longitudArray;
exports.sumaArray=sumaArray;
