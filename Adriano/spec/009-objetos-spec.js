
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

describe("Manejo de Objetos", function(){

  it("igualdad entre objetos", function(){

    var objeto1= {nombre:"pepe"};
    var objeto2= {nombre:"pepe"};

    expect(objeto1).toBe(objeto1);

  });


});
