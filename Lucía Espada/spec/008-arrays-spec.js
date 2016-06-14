describe ("Manejo de Arrays", function(){
it ("test longitud array", function() {
  var lista =[1,2,3];
  expect(lista.length).toBe(3);

});

it ("test suma items del array", function() {
  var lista =[1,2,3];
  var suma=0;
  for(var i=0;i<lista.length;i++){

    suma=suma+lista[i];
  }
  expect(suma).toBe(6);

});

it ("test menor numero array", function() {
  var lista =[2,2,3,5,1];
  var menor=lista[0];

  for(var i=0;i<lista.length;i++){
    if (lista[i]<menor) {
        menor=lista[i];
    }
}
  expect(menor).toBe(1);

  });

it ("test numero de veces que sale el 2", function() {
  var lista =[2,2,3,4,5];
  var elemento=2;
  var contador=0;
  for(var i=0;i<lista.length;i++){
    if (elemento==lista[i]) {
        contador++;
    }
    }
  expect(contador).toBe(2);

  });

  it ("test suma de números mayores de 5", function() {
  var lista =[1,2,3,4,5,6];
  var suma=0;
  for(var i=0;i<lista.length-1;i++){
    if (lista[i]>=5){
      suma = suma+lista[i];
    }
    }
  expect(sumamayor).toBe(11);

});
  });
