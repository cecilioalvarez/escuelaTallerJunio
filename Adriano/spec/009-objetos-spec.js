<<<<<<< HEAD
describe("Manejo de objetos", function(){

  it("Test de identidad de objetos", function(){

    var objeto1={nombre:"pepe"};
    var objeto2={nombre:"pepe"};

    expect(objeto1).not.toBe(objeto2);
});
it("test comparacion objetos entre si", function(){

  var objeto1={nombre:"pepe"};
  var objeto2={nombre:"pepe"};

  expect(objeto1).toEqual(objeto2);
});
it("test contiene propiedad nombre", function(){

  var objeto1={nombre:"pepe"};


  expect(objeto1.nombre).toBeDefined();

});
});
=======
describe("Manejo de Objetos", function(){

  it("igualdad entre objetos", function(){

    var objeto1= {nombre:"pepe"};
    var objeto2= {nombre:"pepe"};

    expect(objeto1).toBe(objeto1);

  });


});
>>>>>>> 0ed4afa0942ae384f42b5a1faa618c0caf6f6caf
