describe("Manejo de objetos", function() {

  it("test de igualdad de objetos", function(){

var objeto1={nombre:"pepe"};
var objeto2={nombre:"pepe"};

expect(objeto1).not.toBe(objeto2);
});

it("test comparacion objetos entre si", function() {

var objeto1={nombre:"pepe"};
var objeto2={nombre:"pepe"};

expect(objeto1).toEqual(objeto2);
});

it("test contiene propiedad", function() {

var objeto1={nombre:"pepe"};


expect(objeto1.nombre).toBeDefined();
});

});
