var operaciones=require("./function.js");
describe("Funciones basicas", function() {
  var numero1;
  var numero2;

  beforeEach(function() {
    numero1=2;
    numero2=2;
  });
  it("test funcion suma", function() {
    expect(operaciones.suma(numero1,numero2)).toBe(4);
  });
  it ("test function resta", function() {
    expect(operaciones.resta(numero1,numero2)).toBe(0);
  });
  it ("test function mult", function() {
    expect(operaciones.mult(numero1,numero2)).toBe(4);
});
it ("test function div", function() {
  expect(operaciones.div(numero1,numero2)).toBe(1);
});
});
