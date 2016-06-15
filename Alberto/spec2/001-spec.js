var operaciones=require("./function.js");
describe("Funciones basicas", function() {
  it("test funcion suma", function() {
    expect(operaciones.suma(2,2)).toBe(4);
  });
  it ("test function resta", function() {
    expect(operaciones.resta(2,2)).toBe(0);
  });
  it ("test function mult", function() {
    expect(operaciones.mult(2,2)).toBe(4);
});
it ("test function div", function() {
  expect(operaciones.div(2,2)).toBe(1);
});
});
