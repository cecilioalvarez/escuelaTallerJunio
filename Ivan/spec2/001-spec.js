var operaciones=require("./funciones1.js");
describe("funciones basicas", function() {

it ("test function suma", function() {

  expect(operaciones.suma(2,2)).toBe(4);

});


it ("test function resta", function() {

  expect(operaciones.resta(2,2)).toBe(0);

});
it ("test function multiplicar", function() {

  expect(operaciones.multiplicar(2,2)).toBe(4);

});
it ("test function dividir", function() {

  expect(operaciones.dividir(2,2)).toBe(1);

});
});
