
describe(" Manejo de arrays", function () {

  it ("test contar array", function() {
    var lista=[1,3,6,7];
    expect(lista.length).toBe(4);
  });


  it ("test suma array", function() {
    var suma=0;
    var lista=[1,3,6,7];
    for (var i=0;i<lista.length;i++){
      suma=suma+lista[i];
    }
    expect(suma).toBe(17);
  });


  it ("test menor del array", function() {

    var lista=[4,2,6,7];
    var menor=lista[0];
    for (var i=0;i<lista.length;i++){
      if (menor>lista[i]){
        menor=lista[i];
      }
    }
    expect(menor).toBe(2);
  });


<<<<<<< HEAD
  it ("test repetidos del array", function() {
=======
  it ("test contar numero de doses", function() {
>>>>>>> bddde5ebf030e3bb487b69388efde3ad707b3de8

    var lista=[4,2,2,2,6,7];
    var elemento=2;
    var contador=0;
    for (var i=0;i<lista.length;i++){
      if(elemento==lista[i]){
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


    it ("test sumar numeros mayores de 5", function() {

    var lista=[4,2,2,5,7];
    var suma=0;
    for (var i=0;i<lista.length;i++){
      suma=suma+lista[i];
      var media=suma/lista.length;
    }
    expect(media).toBe(4);
  });


});
