describe("Manejo de Objetos", function() {

  it("igualdad entre objetos", function() {
var objeto1={nombre:"pepe"};
var objeto2={nombre:"pepe"};
expect(objeto1).toBe(objeto1)
});

it("Igualdad entre 2 Objetos", function() {
var objeto1={nombre:"pepe"};
var objeto2={nombre:"pepe"};
expect(objeto1).not.toBe(objeto2)
});
  it("Igualdad entre 2 Objetos", function() {
var objeto1={nombre:"pepe"};
var objeto2={nombre:"pepe"};
expect(objeto1).toEqual(objeto2)
});

});
