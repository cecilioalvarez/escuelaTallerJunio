describe ("Array", function(){
  it ("test recorrer una Array", function() {
var lista=[1,2,3,4,5,6,7,8,9];
expect(lista.length).toBeDefined(10);
});
  it (" test sumar una Array", function() {
var lista=[1,2,3,4,5,6,7,8,9];
var suma=0;
for (i=0;i<lista.length;i++){
  suma=suma+lista[i];
}
expect(lista.length).toBeDefined(10);
});
it (" test menor de una Array", function() {
var lista=[4,5,2,6];
var menor=lista[0];
for (i=0;i<lista.length;i++){
if (lista[i]<menor) {
  menor=lista[i];
}
}
expect(menor).toBeDefined(2);
});

  it ("test repetidos del array", function() {

    var lista=[4,2,2,6,7];
    var elemento=2;
    var contador=0;
    for (var i=0;i<lista.length;i++){
      if(elemento==lista[i]){
        contador++;
        }
    }
    expect(contador).toBe(2);
  });

  it ("test suma 10 numeros negativos", function() {


    var suma=0;
    for (var i=0;i>-10;i--){
  suma=suma+i;
    }
    expect(suma).toBe(-45);
  });
});
