describe("Manejos de Objetos", function() {

  it("igualdad entre objeto consigo mismo", function() {

var objeto1={nombre:"pepe"};
var objeto2={nombre:"pepe"};
expect(objeto1).toBe(objeto1)

});

  it("igualdad entre 2 objetos", function() {

var objeto1={nombre:"pepe"};
var objeto2={nombre:"pepe"};
expect(objeto1).toBe(objeto2)
});
});
