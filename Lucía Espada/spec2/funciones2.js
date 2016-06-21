var sumaNumeros=function sumar(numero){
var suma = 0;
for (var i=0;i<numero;i++){
  suma=suma+i;
}
return suma;
};
 var productoNumeros = function productoNumeros(numero){
 var producto = 1;
 for (var i = 1; i <= numero; i++) {
   producto=producto * i;
 }

   return producto;
 };
 var longitudArray= function longitudArray(unArray) {

   return unArray.length;

 };
 var sumaArray= function sumaArray(unArray) {
   var total = 0;
    for (var i = 0; i <unArray.length; i++) {
      total=total+unArray[i];
  }
   return total;


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


 exports.sumaNumeros=sumaNumeros;
 exports.factorial=productoNumeros;
 exports.longitudArray=longitudArray;
 exports.sumaArray=sumaArray;
 exports.mayorArray=mayorArray;
//export =el como lo quieres llamar cuando vaya al otro programa
