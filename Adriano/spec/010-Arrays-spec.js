
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


  it ("test menor del array", function() {

    var lista=[4,2,2,2,6,7];
    var contador=0;
    for (var i=0;i<lista.length;i++){
      if(lista[i]==2){
        contador++;
        }
    }
    expect(contador).toBe(3);
  });

});
