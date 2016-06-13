
describe ("Manejo de objetos", function() {

it ("igualdad entre objetos", function() {

  var objeto1={nombre:"pepe"};
  var objeto2={nombre:"pepe"};
  expect(objeto1).toBe(objeto1);

  });

it ("igualdad entre dos objetos", function() {
  var objeto1={nombre:"pepe"};
  var objeto2={nombre:"pepe"};
  expect(objeto1).toEqual(objeto2);

});

it ("test identidad objetos", function() {

  var objeto1={nombre:"pepe"};
  var objeto2={nombre:"pepe"};
  expect(objeto1).not.toBe(objeto2);

  });
  it ("test contiene propiedad nombre", function() {
    var objeto1={nombre:"pepe"};

    expect(objeto1.nombre).toBeDefined();

});

it ("longitud array", function() {
  var array=[1,2,3,4,5];

expect(array.length).toBe(5);

});

it ("suma array", function() {
  var array=[1,2,3,4,5];
  var suma=0;
  for (i=0;i<array.length; i++) {
    suma=suma+array[i];
  }
expect(suma).toBe(15);

});
it ("busca el menor", function() {
  var array=[1,2,3,4,5];
  var menor=array[0];
  for (var i=0; i<array.length; i++) {
      if (array[i] < menor) {
        menor=array[i];
      }
  }
expect(menor).toBe(1);
});


it ("busca valores repetidos", function() {
  var array=[1,2,4,6,2];
  var contador=2;
  var numero=0;
  for (var i=0; i<array.length; i++) {
      if (array[i] == numero) {
        contador++
      }
  }
expect(contador).toBe(2);

});
});
