describe("Manejos de Objetos", function() {

  it("igualdad entre objeto consigo mismo", function() {

var objeto1={nombre:"pepe"};
var objeto2={nombre:"pepe"};
expect(objeto1).not.toBe(objeto1);

});

  it("igualdad entre 2 objetos", function() {

var objeto1={nombre:"pepe"};
var objeto2={nombre:"pepe"};
expect(objeto1).toEqual(objeto2);
});
it("igualdad entre objeto consigo mismo", function() {

var objeto1={nombre:"pepe"};
var objeto2={nombre:"pepe"};
expect(objeto1).toBe(objeto1);

});
it("text suma items del array", function() {

var lista=(1,2,3);
var suma=0;
for (var i=0;i<lista.length; i++){
suma=suma+lista(i);

}
});
it("text suma items del array", function() {

var lista=(2,2,3,4,5);
var elemento=2;
var contador=0;
for (var i=0;i<lista.length; i++){
if (elemento==lista(i)){
  contador++;
}excep(contador).toBe(2);

}
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
});
