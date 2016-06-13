describe("manejo de Objetos", function() {
if("igualdad onjetos consigo mismo", function() {

  var objeto1={nombre:"pepe"};
  var objeto2={nombre:"pepe"};
expect(objeto1).toBe(objeto1);
  })

  it("igualdad entre dos objetos", function() {
    var objeto1={nombre:"pepe"};
    var objeto2={nombre:"pepe"};
    expect(objeto1).toEqual(objeto2);
  })
  it("test contiene propiedad nombre", function() {
    var objeto1={nombre:"pepe"};

    expect(objeto.nombre).toBeDefined();
  })
  })
it ("test longitud array", function () {
  var lista= [1,2,3];
  expect(lista.length)toBe(3);
});
it("test suma items del array", function() {
  var lista= [1,2,3];
  var suma=0;
  for(var i=0; i<lista.length; i++) {
    suma= suma + lista[i];

  }
  expect(suma).toBe(3);
});


it("test menor del array", function() {
  var lista= [2,2,3,5,1];
  var suma=lista [0];
  for(var i=0; i<lista.length; i++) {
    if=lista[i];
}
  }
  expect(menor).toBe(1);


  });

  });
