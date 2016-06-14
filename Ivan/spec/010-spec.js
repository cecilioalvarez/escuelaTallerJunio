describe("Manejo de Objetos", function() {

  it("test el menor del array", function(){
var lista =[2,2,3,5,1];
var menor=lista[0];

for (var i= 0; i < lista.length; i++) {

if (lista[i]< menor){


menor=lista[i];

}
}
expect(menor).toBe(1);

});

it("numero dos veces", function(){
var lista =[2,2,3,4,5];
var elemento = 2;
var contador= 0;

for (var i= 0; i < lista.length; i++) {

if (elemento==lista[i]){


contador++;

}
}
expect(contador).toBe(2);

});
it ("test sumar numeros mayores de 5", function() {

  var lista=[4,2,2,6,7];
  var numero=5;
  var suma=0;
  for (var i=0;i<lista.length;i++){
    if (lista[i]>numero){
      suma=suma+lista[i];
    }
}
  expect(suma).toBe(13);
});

it ("test suma 10 numeros negativos", function() {
  var suma=0;
  for (var i=0;i>-10;i--){
    suma=suma+i;
  }
  expect(suma).toBe(-45);
});

it("test media array", function() {

var lista=[1,5,3,3,1];
var suma=0;
for (var i = 0; i < lista.length; i++) {
suma=suma+lista[i]/5;
}
expect(suma).toBe(2.6);
});

it("test añadir array", function() {

var lista=[4,5,3,2,1];
expect(lista.length).toBe(5);
lista.push(6);
expect(lista.length).toBe(6);
});
it ("test rellenar array", function() {

  var lista=[4,2,2,5,7];
  var lista2=[];
  for (var i=0;i<lista.length;i++){
    lista2.push(lista[i]);
}
  expect(lista).toEqual(lista2);
});
it ("test rellenar array mayores de 3", function() {

  var lista=[4,2,2,5,7];
  var lista2=[];
  for (var i=0;i<lista.length;i++){if (lista[i] >=4) {

      lista2.push(lista[i]);
  } else {}

}
  expect(lista2.length).toBe(3);
});

it ("test Bucle array al reves", function() {

  var lista=[4,2,2,5,7];
  var texto="";
  for (var i=lista.length-1;i>=0;i--){
    texto=texto+lista[i];

}
expect(texto).toEqual("75224");
});
});
